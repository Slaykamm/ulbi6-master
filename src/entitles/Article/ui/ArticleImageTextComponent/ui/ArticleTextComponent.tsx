import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleTextBlock } from '../../../model/types/article';
import cls from './ArticleTextComponent.module.scss';

interface ArticleTextComponentProps {
   className?: string;
   block: ArticleTextBlock;
}

export const ArticleTextComponent = memo((props: ArticleTextComponentProps) => {
    const {
        className,
        block,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextComponent, {}, [className])}>
            {block?.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
