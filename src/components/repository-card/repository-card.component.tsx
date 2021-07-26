import { ReactElement, useContext } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { DocumentDuplicateIcon, EyeIcon, StarIcon as StarIconOutlined } from '@heroicons/react/outline';
import clsx from 'clsx';
import { RepositoryType } from '../../context/repositories-context.types';
import RepositoriesContext from '../../context/repositories.context';

interface RepositoryCardProps {
    /** className of the card */
    className?: string;

    /** repository to be displayed in the card */
    repository: RepositoryType;
}

/** component, to display a given repositories' information in a card */
export default function RepositoryCard(props: RepositoryCardProps): ReactElement {
    const {
        className,
        repository,
    } = props;
    const {
        id,
        name,
        starred,
        language,
        link,
        author,
        authorUrl,
        createdAt,
        forks,
        watchers,
        stars,
    } = repository;
    const { star } = useContext(RepositoriesContext);
    return (
        <div className={clsx(className, 'py-4 pl-6 pr-9 shadow-md rounded max-w-96 relative')}>
            <button
                className={clsx('w-11 h-11 absolute right-0 top-0 p-2', starred ? 'text-purple-500 hover:text-gray-500' : 'text-gray-500 hover:text-purple-500')}
                type="button"
                onClick={() => star(id)}
            >
                {starred ? (
                    <StarIcon stroke="currentColor" className="w-full h-full " />
                ) : (
                    <StarIconOutlined className="w-full h-full" />
                )}
            </button>
            <div className="flex flex-col items-start">
                <a title={name} href={link} className="max-w-full hover:text-blue-700 hover:underline" target="_blank" rel="noreferrer">
                    <h2 className="text-xl max-w-full overflow-hidden overflow-ellipsis">{name}</h2>
                </a>
                <p className="italic">
                    By
                    {' '}
                    <a href={authorUrl} className="hover:text-blue-700 hover:underline" target="_blank" rel="noreferrer">
                        {author}
                    </a>
                </p>
                <p className="italic text-sm">
                    Created
                    {' '}
                    {new Date(createdAt).toLocaleDateString()}
                </p>
                <span className="my-4 px-2 py-1 bg-purple-200 rounded shadow-md">
                    {language || <em>no language</em>}
                </span>
                <div className="flex mt-auto">
                    <span className="flex items-center mr-2 rounded-sm shadow-md p-1">
                        <StarIconOutlined className="flex-none w-4 h-4 mr-1" />
                        {stars}
                    </span>
                    <span className="flex items-center mx-2 rounded-sm shadow-md p-1">
                        <EyeIcon className="flex-none w-4 h-4 mr-1" />
                        {watchers}
                    </span>
                    <span className="flex items-center ml-2 rounded-sm shadow-md p-1">
                        <DocumentDuplicateIcon className="flex-none w-4 h-4 mr-1" />
                        {forks}
                    </span>
                </div>
            </div>
        </div>
    );
}
