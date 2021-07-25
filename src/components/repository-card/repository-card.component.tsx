import { ReactElement, useContext } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarIconOutlined } from '@heroicons/react/outline';
import clsx from 'clsx';
import { RepositoryType } from '../../context/repositories-context.types';
import RepositoriesContext from '../../context/repositories.context';

interface RepositoryCardProps {
    className?: string;
    repository: RepositoryType;
}

export default function RepositoryCard(props: RepositoryCardProps): ReactElement {
    const {
        className,
        repository,
    } = props;
    const { star } = useContext(RepositoriesContext);
    return (
        <div className={clsx(className, 'py-4 px-8 shadow-lg rounded')}>
            <div className="flex">
                <h2 className="text-3xl">{repository.name}</h2>
                <button
                    className="w-6 h-6 self-top"
                    type="button"
                    onClick={() => star(repository.id)}
                >
                    {repository.starred ? (
                        <StarIcon className="w-full h-full text-purple-500 hover:text-gray-500" />
                    ) : (
                        <StarIconOutlined className="w-full h-full text-gray-500 hover:text-purple-500" />
                    )}
                </button>
            </div>
            <div className="flex">
                <span>{repository.language}</span>
                <span>{repository.stars}</span>
            </div>
        </div>
    );
}
