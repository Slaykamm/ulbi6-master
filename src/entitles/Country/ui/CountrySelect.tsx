import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../model/types/Country';
import { Listbox } from '@/shared/ui/Popups';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className, value, onChange, readonly,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <Listbox
            className={className}
            onChange={onChangeHandler}
            value={value}
            items={options}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            readOnly={readonly}
            direction="top right"
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});
