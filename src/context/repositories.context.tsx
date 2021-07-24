import { createContext } from 'react';
import { RepositoriesContextValue } from './repositories-context.types';

const RepositoriesContext = createContext<RepositoriesContextValue>({
    loading: false,
    setLoading: () => undefined,
    errorMessage: '',
    setErrorMessage: () => undefined,
    repositories: [],
    updateRepositories: () => undefined,

});
RepositoriesContext.displayName = 'repositories-context';
export default RepositoriesContext;
