import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entitles/Comment';

export interface ArticleDetailsPageCommentsSchema extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
