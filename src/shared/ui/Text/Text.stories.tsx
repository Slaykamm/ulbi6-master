import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTItle = Template.bind({});
onlyTItle.args = {
    title: 'Title',
};

export const onlyTItleDark = Template.bind({});
onlyTItle.args = {
    title: 'Title',
};
onlyTItleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description',
};

export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'Description Description Description',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title',
    text: 'Description Description Description',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title',
    text: 'Description Description Description',
    size: TextSize.M,
};
