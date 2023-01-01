import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'sdafasdfsadf',
    options: [
        { value: '1', content: 'sdfasdfasdfsdf' },
        { value: '2', content: '2222222222222222' },
        { value: '3', content: '3333333333333' },
        { value: '4', content: '44444444444' },
    ],
};
