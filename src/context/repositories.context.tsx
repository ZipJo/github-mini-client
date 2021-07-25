import { createContext } from 'react';
import { RepositoriesContextValue } from './repositories-context.types';

const RepositoriesContext = createContext<RepositoriesContextValue>({
    star: () => undefined,
    loading: false,
    setLoading: () => undefined,
    errorMessage: '',
    setErrorMessage: () => undefined,
    starredRepositories: [],
    repositories: [],
    updateRepositories: () => undefined,

});
RepositoriesContext.displayName = 'repositories-context';
export default RepositoriesContext;
