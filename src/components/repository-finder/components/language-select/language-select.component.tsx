import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { LANGUAGES } from './language-select.constants';
import { LanguageType } from './language-select.types';

interface LanguageSelectProps {
    /** className to be propped through to react-select */
    className?: string;

    /** array-setter, to set the stateVar */
    setLanguages: React.Dispatch<React.SetStateAction<LanguageType[]>>;
}

/** controlled select-component, based on react-select, displays all GitHub-languages */
export default function LanguageSelect(props: LanguageSelectProps): JSX.Element {
    const { className, setLanguages } = props;
    const languageOptions: ReactSelectProps['options'] = LANGUAGES.map((language) => ({ value: language.urlParam, label: language.name }));
    const handleChange = (options: ReactSelectProps['options']) => {
        setLanguages(options?.map((option) => ({ urlParam: option.value, name: option.label })) || []);
    };

    return (
        <ReactSelect
            isMulti
            name="languages"
            options={languageOptions}
            className={className}
            onChange={handleChange}
        />
    );
}
