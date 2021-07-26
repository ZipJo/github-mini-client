import { useEffect, useState } from 'react';
import { RepositoriesContextValue, RepositoryType } from '../context/repositories-context.types';
import getRepositories from '../services/get-repositories.service';

/** hook, to fill the context with usable values and methods. see the return-type docs, for more information */
export default function useRepositoriesSystem(): RepositoriesContextValue {
    const [loading, setLoading] = useState(true);
    const [repositories, setRepositories] = useState<RepositoryType[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [starredRepositories, setStarredRepositories] = useState<RepositoryType[]>([]);

    const updateRepositories: RepositoriesContextValue['updateRepositories'] = (data, append) => {
        const repos = data?.items.map((item) => ({
            id: item.id,
            name: item.full_name,
            starred: starredRepositories.some((starredRepository) => starredRepository.id === item.id),
            language: item.language,
            stars: item.stargazers_count,
        })) || [];
        if (append) setRepositories(repositories.concat(repos));
        else setRepositories(repos);
    };

    const star: RepositoriesContextValue['star'] = (id) => {
        const index = repositories.findIndex((repo) => (repo.id === id));
        if (index >= 0) {
            const shallowRepoCopy = [...repositories];
            const { starred } = repositories[index];
            shallowRepoCopy[index].starred = !starred;
            if (!starred) {
                setStarredRepositories([...starredRepositories, shallowRepoCopy[index]]);
            } else {
                setStarredRepositories(starredRepositories.filter((starredRepository) => starredRepository.id !== shallowRepoCopy[index].id));
            }
            setRepositories(shallowRepoCopy);
        } else {
            // this has to have been toggled from within starredRepositories - remove it
            setStarredRepositories(starredRepositories.filter((starredRepository) => starredRepository.id !== id));
        }
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
        star,
        loading,
        setLoading,
        errorMessage,
        setErrorMessage,
        starredRepositories,
        repositories,
        updateRepositories,
    };
}
