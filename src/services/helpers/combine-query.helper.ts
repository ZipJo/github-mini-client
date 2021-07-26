/** This is a 'glorified' .join(' ') operater, that only joins truthy values from an array of strings */
/** I _could_ use clsx here as well, but this would feel hacky */
export default function combineQuery(...rest: string[]): string {
    const combined = rest?.reduce((acc, current) => {
        if (acc && current) return `${acc} ${current}`;
        if (acc) return acc;
        return current;
    }, '') || '';
    return combined;
}
