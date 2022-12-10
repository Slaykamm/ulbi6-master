import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from '@/entitles/Article';
import { getUserAuthData } from '@/entitles/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article.user.id === user.id;
    },
);
