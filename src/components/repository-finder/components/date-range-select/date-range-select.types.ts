import { ReactDatePickerProps } from 'react-datepicker';
/** helper type, as react-datepicker is not 100% typesafe */
export type DateRangeType = [ReactDatePickerProps['startDate'], ReactDatePickerProps['endDate']];
