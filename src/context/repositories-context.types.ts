import { RawGitHubData } from '../services/get-repositories.types';

export type RepositoryType = {
    id: number
    name: string;
    starred: boolean;
    language: string;
    stars: number;
}

export interface RepositoriesContextValue {
    star: (id: number) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    errorMessage: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    starredRepositories: RepositoryType[];
    repositories: RepositoryType[];
    updateRepositories: (data: RawGitHubData, append?: boolean) => void;
}
