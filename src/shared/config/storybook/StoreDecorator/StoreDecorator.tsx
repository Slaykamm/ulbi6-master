/* eslint-disable no-undef */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entitles/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { addCommentReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/ProfileSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaulAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentReducer,
    articleDetailsPage: articleDetailsReducer,
};

// eslint-disable-next-line max-len
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaulAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
