import clsx from 'clsx';
import { useContext } from 'react';
import RepositoriesContext from '../../../../context/repositories.context';
import RepositoryCard from '../../../repository-card/repository-card.component';

interface RepositoriesDisplayProps {
    /** className of the cards' container */
    className?: string;

    /** text based filter to filter for a repositories name  */
    textFilter?: string;
}

/** The main Display component. Iterates through all repositories and displays them, also takes care of the real-time filter */
export default function RepositoriesDisplay(props: RepositoriesDisplayProps): JSX.Element {
    const {
        className,
        textFilter,
    } = props;
    const {
        repositories,
    } = useContext(RepositoriesContext);

    return (
        <div className={clsx(className, 'flex flex-wrap justify-center')}>
            {repositories
                .filter((repository) => (textFilter ? repository.name.includes(textFilter) : true))
                .map((repository) => (
                    <RepositoryCard
                        className="m-2 flex-auto"
                        key={`repo_${repository.id}`}
                        repository={repository}
                    />
                ))}
        </div>
    );
}
