/* eslint-disable no-unused-vars */
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entitles/Article';
import { CounterSchema } from '@/entitles/Counter';
import { UserSchema } from '@/entitles/User';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/editableProfileCard';
import { UISchema } from '@/features/UI';
import {
    ArticleDetailsPageSchema,
} from '@/pages/ArticleDetailsPage';
import { articlePageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: articlePageSchema;
    articleDetailsPage: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWIthManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
