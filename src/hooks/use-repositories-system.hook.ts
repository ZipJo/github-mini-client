import { useEffect, useState } from 'react';
import { RepositoriesContextValue, RepositoryType } from '../context/repositories-context.types';
import getRepositories from '../services/get-repositories.service';
import { RawGitHubData } from '../services/get-repositories.types';

export default function useRepositoriesSystem(): RepositoriesContextValue {
    const [loading, setLoading] = useState(true);
    const [repositories, setRepositories] = useState<RepositoryType[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const updateRepositories = (data?: RawGitHubData): void => {
        console.log('data', data);
        const repos = data?.items.map((item) => ({ name: item.full_name, starred: false })) || [];
        setRepositories(repos);
    };
    useEffect(() => {
        setLoading(true);
        getRepositories()
            .then((result) => {
                updateRepositories(result.data);
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        repositories,
        updateRepositories,
    };
}
