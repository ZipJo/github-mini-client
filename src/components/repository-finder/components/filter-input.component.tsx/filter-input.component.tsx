import { XIcon } from '@heroicons/react/solid';

interface FilterInputProps {
    className?: string;
    textFilter: string;
    setTextFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterInput(props: FilterInputProps): JSX.Element {
    const {
        className,
        textFilter,
        setTextFilter,
    } = props;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTextFilter(event.target.value);
    };

    return (
        <div className={className}>
            <input
                className="appearance-none bg-transparentborder-none w-40 leading-tight focus:outline-none"
                value={textFilter}
                onChange={handleChange}
                type="text"
                placeholder="Filter"
                aria-label="Filter"
            />
            <button className="flex-none w-4 h-4" type="button">
                <XIcon className="text-red-200 hover:text-red-600" onClick={() => setTextFilter('')} />
            </button>
        </div>
    );
}
