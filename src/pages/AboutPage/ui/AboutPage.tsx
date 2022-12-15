import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entitles/Counter';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
