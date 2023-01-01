import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { ArticleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recomendations: ArticleDetailsPageRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
