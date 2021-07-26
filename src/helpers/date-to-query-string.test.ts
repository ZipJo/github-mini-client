import dateToQueryString from './date-to-query-string.helper';

// Months are 0-based and the query uses UTC
const testDate1 = new Date(Date.UTC(2000, 10, 5));
const testDate2 = new Date(Date.UTC(1950, 11, 30));
const testDate3 = new Date(Date.UTC(2050, 0, 1));

test('Date null to return undefined', () => {
    expect(dateToQueryString(null)).toBe(undefined);
});

test('any given Date to return a YYYY-MM-DD string', () => {
    expect(dateToQueryString(testDate1)).toBe('2000-11-05');
    expect(dateToQueryString(testDate2)).toBe('1950-12-30');
    expect(dateToQueryString(testDate3)).toBe('2050-01-01');
});
