import axios, { AxiosResponse } from 'axios';

const GITHUB_QUERY_URL = 'https://api.github.com/search/repositories';

export default async function getRepositories(): Promise<AxiosResponse> {
    const queryString = '?q=stars:>=10000';
    const requestUrl = GITHUB_QUERY_URL + queryString;
    console.log('requestUrl', requestUrl);
    return axios.get(requestUrl);
}
