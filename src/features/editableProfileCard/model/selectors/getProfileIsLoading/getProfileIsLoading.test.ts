/* eslint-disable no-undef */
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entitles/Country';
import { Currency } from '@/entitles/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,

            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
