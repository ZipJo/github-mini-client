import clsx from 'clsx';
import DatePicker from 'react-datepicker';

import './date-range-select.component.css';
import 'react-datepicker/dist/react-datepicker.css';
import { dateRangeType } from './date-range-select.types';

interface DateRangeSelectProps {
    className?: string;
    dateRange: dateRangeType;
    setDateRange: React.Dispatch<React.SetStateAction<dateRangeType>>;
}

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
                className={clsx(className, 'h-full pl-2')}
                selectsRange
                startDate={startDate}
                placeholderText="select a date range"
                endDate={endDate}
                onChange={(update) => {
                // DatePicker is not 100% Typesafe, so I'm sanitizing the callback parameter a bit
                    const updateSanitizer: dateRangeType = Array.isArray(update) ? update : [null, null];
                    setDateRange(updateSanitizer);
                }}
            />
        </div>
    );
}
