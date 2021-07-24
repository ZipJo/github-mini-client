import { useContext } from 'react';
import RepositoriesContext from '../../../../context/repositories.context';
import { dateRangeType } from '../date-range-select/date-range-select.types';
import { LanguageType } from '../language-select/language-select.types';

interface RepositoriesDisplayProps {
    className?: string;
    textFilter?: string;
    languages?: LanguageType[];
    dateRange?: dateRangeType;
}

export default function RepositoriesDisplay(props: RepositoriesDisplayProps): JSX.Element {
    const {
        className,
        textFilter,
        languages,
        dateRange,
    } = props;
    const {
        repositories,
    } = useContext(RepositoriesContext);

    return (
        <div className={className}>
            <p>
                textFilter:
                <br />
                {textFilter}
            </p>
            <p>
                languages:
                <br />
                {JSON.stringify(languages)}
            </p>
            <p>
                dateRange:
                <br />
                {JSON.stringify(dateRange)}
            </p>
            <p>
                data:
                <br />
                {JSON.stringify(repositories)}
            </p>
        </div>
    );
}
