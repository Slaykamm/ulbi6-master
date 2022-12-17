import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('');

    return (
        <Page>
            {t('У Вас нет прав для просмотра данной страницы')}
        </Page>
    );
};

export default ForbiddenPage;
