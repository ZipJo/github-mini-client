import { RawGitHubData } from '../services/get-repositories.types';

export type RepositoryType = {
    /** UID */
    id: number

    /** path and name of the repository */
    name: string;

    /** displays, if this repository is starred by the user */
    starred: boolean;

    /** programming language used */
    language?: string;

    /** link to the repo */
    link: string;

    /** name of the author */
    author: string;

    /** link to the author's GitHub */
    authorUrl: string;

    /** when the repo was created */
    createdAt: string;

    /** amount of forks */
    forks: number;

    /** amount of watchers */
    watchers: number;

    /** amount of stars */
    stars: number;
}

export interface RepositoriesContextValue {
    /** method, to toggle the users "starred"-state of a given repo */
    star: (id: number) => void;

    /** true, if the query is loading */
    loading: boolean;

    /** sets the loading boolean */
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;

    /** contains an errormessage, if the GET fails */
    errorMessage: string;

    /** sets the errorMessage string */
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;

    /** statevar, to save all user-starred repositories */
    starredRepositories: RepositoryType[];

    /** statevar, to save all fetched repositories */
    repositories: RepositoryType[];

    /** update method, to replace or append the current repositories with new data */
    updateRepositories: (data: RawGitHubData, append?: boolean) => void;
}
