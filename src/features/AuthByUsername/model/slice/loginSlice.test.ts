/* eslint-disable no-undef */
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set userName', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };

        const addedUserName: DeepPartial<LoginSchema> = {
            username: 'aaa',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('aaa')),
        ).toEqual(addedUserName);
    });

    test('test set userPassword', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };

        const userPassword: DeepPartial<LoginSchema> = {
            password: 'bbb',
        };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('bbb')),
        ).toEqual(userPassword);
    });
});
