import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDidpatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDidpatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilter />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
