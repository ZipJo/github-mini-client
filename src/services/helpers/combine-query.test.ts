import combineQuery from './combine-query.helper';

test('no arguments to return empty string', () => {
    expect(combineQuery()).toBe('');
});

test('one argument to return itself, or empty string, if null or undefined', () => {
    expect(combineQuery('test')).toBe('test');
    expect(combineQuery('')).toBe('');
    expect(combineQuery(null)).toBe('');
    expect(combineQuery(undefined)).toBe('');
});
test('multiple arguments to be joined with spaces, if they are not empty string, null or undefined', () => {
    expect(combineQuery('test1', 'test2')).toBe('test1 test2');
    expect(combineQuery('test1', 'test2', 'test3')).toBe('test1 test2 test3');
    expect(combineQuery('test1', 'test2', 'test3', 'test4')).toBe('test1 test2 test3 test4');
    expect(combineQuery('test1', '', 'test3', 'test4')).toBe('test1 test3 test4');
    expect(combineQuery('test1', 'test2', null, 'test4')).toBe('test1 test2 test4');
    expect(combineQuery('test1', 'test2', undefined, 'test4')).toBe('test1 test2 test4');
    expect(combineQuery('', 'test2', 'test3', 'test4')).toBe('test2 test3 test4');
    expect(combineQuery(null, 'test2', 'test3', 'test4')).toBe('test2 test3 test4');
    expect(combineQuery(undefined, 'test2', 'test3', 'test4')).toBe('test2 test3 test4');
    expect(combineQuery('test1', 'test2', 'test3', '')).toBe('test1 test2 test3');
    expect(combineQuery('test1', 'test2', 'test3', null)).toBe('test1 test2 test3');
    expect(combineQuery('test1', 'test2', 'test3', undefined)).toBe('test1 test2 test3');
});
