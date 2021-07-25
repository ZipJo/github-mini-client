import RepositoryFinder from './components/repository-finder/repository-finder.component';
import StarredRepositoriesFAB from './components/starred-repositories-fab/starred-repositories-fab.component';
import RepositoriesContext from './context/repositories.context';
import useRepositoriesSystem from './hooks/use-repositories-system.hook';

function App(): JSX.Element {
    const repositoriesProviderValue = useRepositoriesSystem();
    return (
        <main className="container mx-auto">
            <header className="text-center m-6">
                <h1 className="text-4xl mb-2">Trending Repos 📈</h1>
                <h2 className="text-2xl">Find a few projects and widen your horizon!</h2>
            </header>
            <RepositoriesContext.Provider value={repositoriesProviderValue}>
                <RepositoryFinder className="m-6" />
                <footer>
                    <StarredRepositoriesFAB />
                </footer>
            </RepositoriesContext.Provider>
        </main>
    );
}

export default App;
