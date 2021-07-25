import { SearchIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState, useContext } from 'react';
import { A_WEEK_AGO, NOW } from '../../constants/dates.constants';
import RepositoriesContext from '../../context/repositories.context';
import getRepositories from '../../services/get-repositories.service';
import DateRangeSelect from './components/date-range-select/date-range-select.component';
import { DateRangeType } from './components/date-range-select/date-range-select.types';
import FilterInput from './components/filter-input.component.tsx/filter-input.component';
import LanguageSelect from './components/language-select/language-select.component';
import { LanguageType } from './components/language-select/language-select.types';
import RepositoriesDisplay from './components/repositories-display/repositories-display.component';

interface RepositoryFinderProps {
    className?: string;
}

export default function RepositoryFinder(props: RepositoryFinderProps): JSX.Element {
    const {
        className,
    } = props;

    const [textFilter, setTextFilter] = useState('');
    const [languages, setLanguages] = useState<LanguageType[]>([]);
    const [dateRange, setDateRange] = useState<DateRangeType>([A_WEEK_AGO, NOW]);
    const [pagesLoaded, setPagesLoaded] = useState(1);
    const {
        loading, setLoading, updateRepositories, setErrorMessage,
    } = useContext(RepositoriesContext);

    const loadFilteredRepositories = (page?: number) => {
        const [startDate, endDate] = dateRange;
        setLoading(true);
        getRepositories({
            dateFrom: startDate,
            dateTo: endDate,
            languages: languages.map((language) => (language.name)),
            page,
        })
            .then((result) => {
                if (page) setPagesLoaded(page);
                updateRepositories(result.data, Boolean(page));
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setLoading(false);
            });
    };
    const loadMoreRepositories = () => loadFilteredRepositories(pagesLoaded + 1);

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
                    className="mr-2 flex-none w-56 border-gray-300 border rounded hover:border-gray-500"
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                />
                <button
                    className="w-8 h-8 self-center flex justify-center items-center bg-purple-500 rounded-full disabled:pointer-events-none disabled:bg-gray-500"
                    type="button"
                    disabled={loading}
                    onClick={() => loadFilteredRepositories()}
                >
                    <SearchIcon className="w-5 h-5 flex-none text-white" />
                </button>
            </div>
            <RepositoriesDisplay
                textFilter={textFilter}
            />
            <button
                className="text-blue-600 hover:underline disabled:text-gray-500 disabled:pointer-events-none"
                type="button"
                disabled={loading}
                onClick={loadMoreRepositories}
            >
                {loading ? 'Loading...' : 'Load more'}
            </button>
        </section>
    );
}
