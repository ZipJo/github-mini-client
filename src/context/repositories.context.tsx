import { createContext } from 'react';

const RepositoriesContext = createContext({
    loading: false,
    updateRepositoriesContext: () => undefined,
    Repositories: {},
});
RepositoriesContext.displayName = 'repositories-context';
export default RepositoriesContext;
