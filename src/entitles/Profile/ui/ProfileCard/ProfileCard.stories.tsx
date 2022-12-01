import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entitles/Country';
import { Currency } from 'entitles/Currency';
import avatar from 'shared/assets/tests/qf12_cat.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Andrey',
        lastname: 'Ivanov',
        age: 40,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'Saint-Petersburg',
        username: 'admin',
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
    error: 'true',
};
