import clsx from 'clsx';
import { useState, useContext } from 'react';
import RepositoriesContext from '../../context/repositories.context';
import getRepositories from '../../services/get-repositories.service';
import DateRangeSelect from './components/date-range-select/date-range-select.component';
import { dateRangeType } from './components/date-range-select/date-range-select.types';
import FilterInput from './components/filter-input.component.tsx/filter-input.component';
import LanguageSelect from './components/language-select/language-select.component';
import { LanguageType } from './components/language-select/language-select.types';
import RepositoriesDisplay from './components/repositories-display/repositories-display.component';
import loadMoreRepositories from './helpers/load-more-repositories';

interface RepositoryFinderProps {
    className?: string;
}

export default function RepositoryFinder(props: RepositoryFinderProps): JSX.Element {
    const {
        className,
    } = props;

    const [textFilter, setTextFilter] = useState('');
    const [languages, setLanguages] = useState<LanguageType[]>([]);
    const [dateRange, setDateRange] = useState<dateRangeType>([null, null]);

    const {
        loading, setLoading, updateRepositories, setErrorMessage,
    } = useContext(RepositoriesContext);

    const loadRepositories = () => {
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
    };

    return (
        <section className={clsx(className, 'flex flex-col items-center')}>
            <div className="flex w-full">
                <FilterInput
                    className="border-b border-purple-500 flex items-center mr-auto"
                    textFilter={textFilter}
                    setTextFilter={setTextFilter}
                />
                <LanguageSelect
                    className="w-80 flex-none mx-2"
                    setLanguages={setLanguages}
                />
                <DateRangeSelect
                    className="flex-none w-56 border-gray-300 border rounded hover:border-gray-500"
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                />
            </div>
            <button className="text-blue-600 hover:underline" type="button" disabled={loading} onClick={loadRepositories}>Load Initial</button>
            <RepositoriesDisplay
                textFilter={textFilter}
                languages={languages}
                dateRange={dateRange}
            />
            <button className="text-blue-600 hover:underline" type="button" disabled={loading} onClick={loadMoreRepositories}>Load more</button>
        </section>
    );
}
