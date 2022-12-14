/* eslint-disable no-undef */
import { StateSchema } from '@/app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORECT_USER_AGE,
                    ValidateProfileError.NO_DATA,
                ],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.INCORECT_USER_AGE,
            ValidateProfileError.NO_DATA,
        ]);
    });

    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateError(state as StateSchema)).toEqual(
            undefined,
        );
    });
});
