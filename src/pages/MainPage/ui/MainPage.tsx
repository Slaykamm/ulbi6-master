import { Counter } from 'entitles/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState<string>('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>aaa</div>
            <HStack>
                <div>aaa</div>
                <Listbox
                    onChange={onChange}
                    // eslint-disable-next-line i18next/no-literal-string
                    defaultValue="Выберите значение"
                    value={undefined}
                    items={[
                        { value: '1', content: '111' },
                        { value: '2', content: '222', disabled: true },
                        { value: '3', content: '333' },
                    ]}
                />
            </HStack>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
            <div>aaa</div>
        </Page>
    );
};

export default MainPage;
