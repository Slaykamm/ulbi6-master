/* eslint-disable no-undef */
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entitles/Country';
import { Currency } from '@/entitles/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileData.test', () => {
    test('should return true', () => {
        const data = {
            first: 'Andrey',
            lastname: 'Ivanov',
            age: 40,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Saint-Petersburg',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,

            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
