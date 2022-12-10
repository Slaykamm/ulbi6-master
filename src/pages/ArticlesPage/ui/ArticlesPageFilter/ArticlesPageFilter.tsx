import {
    ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from '@/entitles/Article';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDidpatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPageFilter.module.scss';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageSType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageFilterProps {
   className?: string;
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const {
        className,
    } = props;

    const view = useSelector(getArticlesPageView);
    const { t } = useTranslation();
    const dispatch = useAppDidpatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageSType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view:ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort:ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeOrder = useCallback((newOrder:SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeSearch = useCallback((search:string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const onChangeType = useCallback((value:ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Поиск')} />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
