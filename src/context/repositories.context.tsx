import { createContext } from 'react';
import { RepositoriesContextValue } from './repositories-context.types';

/** creates a context, to be used within a respective provider. Use the useRepositoriesSystem()-hook, to fill with useful values. */
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
