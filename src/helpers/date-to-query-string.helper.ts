export default function dateToQueryString(date: Date | null): string | undefined {
    return date?.toISOString().slice(0, 10);
}
