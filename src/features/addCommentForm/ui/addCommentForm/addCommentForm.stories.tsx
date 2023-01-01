import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import addCommentForm from './addCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: addCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof addCommentForm>;

// @ts-ignore
const Template: ComponentStory<typeof addCommentForm> = (args) => (
    <addCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
Normal.decorators = [StoreDecorator({})];
