export default function combineQuery(...rest: string[]): string {
    const combined = rest.reduce((acc, current) => {
        if (acc && current) return `${acc}+${current}`;
        if (acc) return acc;
        return current;
    }, '');
    return combined;
}
