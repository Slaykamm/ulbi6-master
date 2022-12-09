import { Listbox } from '@headlessui/react';
import { Counter } from 'entitles/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
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
