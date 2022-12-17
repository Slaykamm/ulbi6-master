import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';

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
