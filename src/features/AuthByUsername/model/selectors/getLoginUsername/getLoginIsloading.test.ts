/* eslint-disable no-undef */
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });
    test('should work with empty return ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
