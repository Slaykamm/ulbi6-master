/* eslint-disable no-undef */
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './ProfileSlice';

describe('ProfileSlice.test', () => {
    test('test set readOnly', () => {
        const setReadonlyValue: ProfileSchema = {
            readonly: true,
        };

        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        // readonly: true,
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
        )

            .toEqual(setReadonlyValue);
    });

    test('test set cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateError: [ValidateProfileError.INCORECT_USER_AGE],
            form: undefined,
        };
        // readonly: true,
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        )
            .toEqual(
                {
                    readonly: true,
                    validateError: [],
                    form: undefined,
                },
            );
    });

    test('test set undate', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({
                username: '12345',
            })),
        ).toEqual({ form: { username: '12345' } });
    });

    // test('test set service pending', () => {
    //     const state: DeepPartial<ProfileSchema> = {
    //         isLoading: false,
    //         validateError: [ValidateProfileError.SERVER_ERROR],
    //     };
    //     expect(
    //         profileReducer(
    //             state as ProfileSchema,
    //             updateProfileData.pending,
    //         ),
    //     ).toEqual({
    //         isLoading: true,
    //         validateError: undefined,
    //     });
    // });
});
