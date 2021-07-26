/** returns a string from a Date in GitHubs(iso) YYYY-MM-DD format */
export default function dateToQueryString(date: Date | null): string | undefined {
    return date?.toISOString().slice(0, 10);
}
