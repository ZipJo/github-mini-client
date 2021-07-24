import { RawGitHubData } from '../services/get-repositories.types';

export type RepositoryType = {
    name: string;
    starred: boolean;
}

export interface RepositoriesContextValue {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    errorMessage: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    repositories: RepositoryType[];
    updateRepositories: (data?: RawGitHubData) => void;
}
