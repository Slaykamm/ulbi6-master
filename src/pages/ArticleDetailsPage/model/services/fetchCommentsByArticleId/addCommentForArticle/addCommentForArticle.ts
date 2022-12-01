import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entitles/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entitles/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
    >(
        'articleDetails/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                dispatch, extra, rejectWithValue, getState,
            } = thunkApi;
            const userData = getUserAuthData(getState());
            const article = getArticleDetailsData(getState());

            if (!userData || !text || !article) {
                rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId: article?.id,
                    userId: userData?.id,
                    text,
                });
                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article?.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('Error');
            }
        },
    );
