import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../../model/types/article';

interface ArticleImageCodeComponentProps {
   className?: string;
   block: ArticleCodeBlock;
}

export const ArticleCodeComponent = memo((props: ArticleImageCodeComponentProps) => {
    const {
        className,
        block,
    } = props;

    const { t } = useTranslation();

    return (
        <div>
            <Code text={block.code} />
        </div>
    );
});
