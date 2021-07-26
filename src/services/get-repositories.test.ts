import getRepositories from './get-repositories.service';

test('default arguments to resolve with a valid object', () => expect(
    getRepositories(),
).resolves.toMatchObject({}));

test('assigned or null arguments, to resolve with a valid object 1/2', () => expect(getRepositories({
    page: 1,
    sort: 'forks',
    dateFrom: null,
    dateTo: null,
    languages: ['JavaScript'],
})).resolves.toMatchObject({}));

test('assigned or null arguments, to resolve with a valid object 2/2', () => expect(getRepositories({
    page: 3,
    sort: 'updated',
    dateFrom: null,
    dateTo: null,
    languages: [],
})).resolves.toMatchObject({}));

test('broken arguments, to resolve with a valid object', () => expect(getRepositories({
    page: -2,
    dateFrom: undefined,
})).resolves.toMatchObject({}));
