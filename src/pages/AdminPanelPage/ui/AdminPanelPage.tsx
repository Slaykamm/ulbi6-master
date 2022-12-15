import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entitles/Counter';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
