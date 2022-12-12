import { Listbox } from '@headlessui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entitles/Counter';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entitles/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState<string>('');
    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}

            <StarRating />

        </Page>
    );
};

export default MainPage;
