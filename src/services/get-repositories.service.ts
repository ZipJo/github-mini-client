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

    const fullQuery = combineQuery(createdQuery, languageQuery);

    const encoded = {
        q: encodeURIComponent(fullQuery),
        page: encodeURIComponent(page),
        sort: encodeURIComponent(sort),
    };
    const queryString = `?q=${encoded.q}&page=${encoded.page}&sort=${encoded.sort}`;
    const requestUrl = GITHUB_QUERY_URL + queryString;
    console.log('requestUrl', requestUrl);
    return axios.get(requestUrl);
}
