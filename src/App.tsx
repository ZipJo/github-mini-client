import { useEffect } from 'react';
import RepositoryFinder from './components/repository-finder/repository-finder.component';
import StarredRepositoriesFAB from './components/starred-repositories-fab/starred-repositories-fab.component';
import getRepositories from './services/get-repositories.service';

function App(): JSX.Element {
    useEffect(() => {
        getRepositories()
            .then((result) => console.log('result', result))
            .catch((error) => console.log('error', error));
    }, []);
    return (
        <main className="container mx-auto">
            <header className="text-center m-6">
                <h1 className="text-4xl mb-2">Trending Repos 📈</h1>
                <h2 className="text-2xl">Find a few projects and widen your horizon!</h2>
            </header>
            <RepositoryFinder className="m-6" />
            <footer className="fixed bottom-0 right-0 p-4">
                <StarredRepositoriesFAB />
            </footer>
        </main>
    );
}

export default App;
