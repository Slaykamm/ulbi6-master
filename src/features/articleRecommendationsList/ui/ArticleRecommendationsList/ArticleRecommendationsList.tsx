import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entitles/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: articles,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationsList"
                className={classNames('', {}, [className])}
                gap="8"
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    // eslint-disable-next-line i18next/no-literal-string
                    target="_blank"
                />
            </VStack>
        );
    },
);
