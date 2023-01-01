import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At architecto fugiat vel asperiores exercitationem excepturi nisi nulla, ducimus provident enim perspiciatis a velit totam voluptatem, ab non adipisci porro pariatur!',
};

export const Dark = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At architecto fugiat vel asperiores exercitationem excepturi nisi nulla, ducimus provident enim perspiciatis a velit totam voluptatem, ab non adipisci porro pariatur!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
