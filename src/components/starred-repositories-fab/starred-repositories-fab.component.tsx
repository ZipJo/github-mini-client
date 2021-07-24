import clsx from 'clsx';
import { StarIcon } from '@heroicons/react/solid';

interface StarredRepositoriesFABProps {
    className?: string;
}

export default function StarredRepositoriesFAB(props: StarredRepositoriesFABProps): JSX.Element {
    const {
        className,
    } = props;
    return (
        <button
            type="button"
            onClick={() => undefined}
            className={clsx(className, 'w-11 h-11 flex justify-center items-center bg-purple-500 rounded-full')}
        >
            <StarIcon className="w-6 h-6 flex-none text-white" />
        </button>
    );
}
