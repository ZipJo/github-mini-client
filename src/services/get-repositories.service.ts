import axios, { AxiosResponse } from 'axios';

import { A_WEEK_AGO, NOW } from '../constants/dates.constants';
import dateToQueryString from '../helpers/date-to-query-string.helper';

import combineQuery from './helpers/combine-query.helper';

const GITHUB_QUERY_URL = 'https://api.github.com/search/repositories';

type getRepositoriesType = {
    page?: number;
    sort?: 'stars'|'forks'|'help-wanted-issues'|'updated'|'best match';
    dateFrom?: Date | null;
    dateTo?: Date | null;
    languages?: string[];
}

export default async function getRepositories(args?: getRepositoriesType): Promise<AxiosResponse> {
    const {
        page = 1,
        sort = 'stars',
        dateFrom = A_WEEK_AGO,
        dateTo = NOW,
        languages,
    } = args || {};

    const queryDateFrom = dateToQueryString(dateFrom);
    const queryDateTo = dateToQueryString(dateTo);

    let createdQuery = '';
    if (queryDateFrom || queryDateTo) {
        createdQuery = `created:${queryDateFrom ?? '*'}..${queryDateTo ?? '*'}`;
    }

    const languageQuery = languages?.reduce((query, language) => combineQuery(query, `language:${language}`), '') || '';

    // we have to query at least one thing, so I'll add a fixed minimum amount of stars of 1
    const starsQuery = 'stars:>=50';

    const fullQuery = combineQuery(createdQuery, languageQuery, starsQuery);

    const encoded = {
        q: encodeURIComponent(fullQuery),
        page: encodeURIComponent(page),
        sort: encodeURIComponent(sort),
    };
    const queries = {
        q: encoded.q ? `q=${encoded.q}` : '',
        page: encoded.page ? `page=${encoded.page}` : '',
        sort: encoded.sort ? `sort=${encoded.sort}` : '',
    };
    const queryString = () => {
        const values = Object.values(queries);
        if (values.some(Boolean)) {
            return `?${values.filter(Boolean).join('&')}`;
        }
        return '';
    };
    const requestUrl = GITHUB_QUERY_URL + queryString();

    return axios.get(requestUrl);
}
