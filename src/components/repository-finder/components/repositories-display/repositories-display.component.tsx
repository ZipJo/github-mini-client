import { useContext } from 'react';
import RepositoriesContext from '../../../../context/repositories.context';
import RepositoryCard from '../../../repository-card/repository-card.component';

interface RepositoriesDisplayProps {
    className?: string;
    textFilter?: string;
}

export default function RepositoriesDisplay(props: RepositoriesDisplayProps): JSX.Element {
    const {
        className,
        textFilter,
    } = props;
    const {
        repositories,
    } = useContext(RepositoriesContext);

    return (
        <div className={className}>
            {repositories
                .filter((repository) => (textFilter ? repository.name.includes(textFilter) : true))
                .map((repository) => (
                    <RepositoryCard
                        key={repository.id}
                        repository={repository}
                    />
                ))}
        </div>
    );
}