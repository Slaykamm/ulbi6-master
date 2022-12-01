/* eslint-disable no-undef */
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsloading } from './getLoginIsloading';

describe('getLoginError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsloading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsloading(state as StateSchema)).toEqual(false);
    });
});
