/* eslint-disable no-undef */
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entitles/Country';
import { Currency } from '@/entitles/Currency';
import { getProfileError } from './getProfileError';

describe('getProfileData.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'ERRROR',

            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('ERRROR');
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
