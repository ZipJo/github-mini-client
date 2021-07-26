import { useContext, useState } from 'react';
import clsx from 'clsx';
import { StarIcon } from '@heroicons/react/solid';
import RepositoriesContext from '../../context/repositories.context';
import RepositoryCard from '../repository-card/repository-card.component';

interface StarredRepositoriesFABProps {
    /** className of the Button */
    className?: string;
}

/** renders a small floating action button, that toggles a popout component with all currently starred repositories */
export default function StarredRepositoriesFAB(props: StarredRepositoriesFABProps): JSX.Element {
    const {
        className,
    } = props;
    const {
        starredRepositories,
    } = useContext(RepositoriesContext);
    const [renderStarred, setRenderStarred] = useState(false);

    if (!starredRepositories.length) return <></>;
    return (
        <>
            <button
                type="button"
                onClick={() => setRenderStarred(!renderStarred)}
                className={clsx(className, 'w-11 h-11 flex justify-center items-center bg-purple-500 rounded-full fixed bottom-0 right-0 m-4')}
            >
                <StarIcon className="w-6 h-6 flex-none text-white" />
            </button>
            {renderStarred && (
                <div className="fixed right-20 bottom-4 max-h-full w-96 bg-purple-300 shadow-lg rounded">
                    {starredRepositories.map((starredRepository) => (
                        <RepositoryCard
                            className="m-3 bg-white"
                            key={`starredRepo_${starredRepository.id}`}
                            repository={starredRepository}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
