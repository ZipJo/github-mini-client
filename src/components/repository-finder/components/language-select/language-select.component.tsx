import Select, { Props } from 'react-select';
import { LANGUAGES } from './language-select.constants';
import { LanguageType } from './language-select.types';

interface LanguageSelectProps {
    className?: string;
    setLanguages: React.Dispatch<React.SetStateAction<LanguageType[]>>;
}

export default function LanguageSelect(props: LanguageSelectProps): JSX.Element {
    const { className, setLanguages } = props;
    const languageOptions: Props['options'] = LANGUAGES.map((language) => ({ value: language.urlParam, label: language.name }));
    const handleChange = (options: Props['options']) => {
        setLanguages(options?.map((option) => ({ urlParam: option.value, name: option.label })) || []);
    };

    return (
        <Select
            isMulti
            name="languages"
            options={languageOptions}
            className={className}
            onChange={handleChange}
        />
    );
}
