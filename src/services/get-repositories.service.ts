import axios, { AxiosResponse } from 'axios';

import { A_WEEK_AGO, NOW } from '../constants/dates.constants';
import dateToQueryString from '../helpers/date-to-query-string.helper';

import combineQuery from './helpers/combine-query.helper';

const GITHUB_QUERY_URL = 'https://api.github.com/search/repositories';

type getRepositoriesType = {
    /** pagenumber to be fetched. Github defaults to 30 entries per Query, if we want more, we have to load them consecutively */
    page?: number;

    /** 'sort by X, descending - same as on Githubs "trending" page */
    sort?: 'stars'|'forks'|'help-wanted-issues'|'updated'|'best match';

    /** start date, to be searched from - when the value is _null_, it'll search as far back as possible */
    dateFrom?: Date | null;

    /** end date, to be searched to - when the value is _null_, it'll search until today */
    dateTo?: Date | null;

    /** query any number of programming languages */
    languages?: string[];
}
/**
 * This function returns an axios Promise, from a get request to GitHubs public repo-Query URL.
 * all arguments are optional, it will default to "All repositories created last week, sorted by stars"
 */
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

    // we have to query at least one thing, so I'll add a fixed minimum amount of stars of 20
    const starsQuery = 'stars:>=20';

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
