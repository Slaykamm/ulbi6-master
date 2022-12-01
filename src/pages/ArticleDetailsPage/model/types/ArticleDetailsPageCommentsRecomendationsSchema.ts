import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entitles/Article';

export interface ArticleDetailsPageCommentsRecomendationsSchema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
