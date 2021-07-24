import clsx from 'clsx';

interface RepositoryFinderProps {
    className?: string;
}

export default function RepositoryFinder(props: RepositoryFinderProps): JSX.Element {
    const {
        className,
    } = props;
    return (
        <section className={clsx(className, '')}>
            <p>repofinder</p>
        </section>
    );
}
