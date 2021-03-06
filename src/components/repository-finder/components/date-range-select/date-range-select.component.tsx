import clsx from 'clsx';
import DatePicker from 'react-datepicker';

import './date-range-select.component.css';
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangeType } from './date-range-select.types';

interface DateRangeSelectProps {
    /** the _datepickers'_ className */
    className?: string;

    /** date range, to be passed in (array of startDate, endDate) */
    dateRange: DateRangeType;

    /** setter of the date range */
    setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
}

/** controlled daterange selector, based on react-datepicker */
export default function DateRangeSelect(props: DateRangeSelectProps): JSX.Element {
    const {
        className,
        dateRange,
        setDateRange,
    } = props;
    const [startDate, endDate] = dateRange;
    return (
        <div className="gmc-DateRangeSelect">
            <DatePicker
                isClearable
                wrapperClassName="h-full"
                className={clsx(className, 'h-full px-2')}
                selectsRange
                startDate={startDate}
                placeholderText="select a date range"
                endDate={endDate}
                onChange={(update) => {
                // DatePicker is not 100% Typesafe, so I'm sanitizing the callback parameter a bit
                    const updateSanitizer: DateRangeType = Array.isArray(update) ? update : [null, null];
                    setDateRange(updateSanitizer);
                }}
            />
        </div>
    );
}
