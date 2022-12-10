import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entitles/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
    'articlesDetailsList/fetchArticleRecommendations',
    async (props, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
