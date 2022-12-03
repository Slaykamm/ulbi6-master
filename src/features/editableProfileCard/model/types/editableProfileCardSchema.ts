import { Profile } from '../../../../entitles/Profile/model/types/profile';

export enum ValidateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_USER_AGE = 'INCORECT_USER_AGE',
    INCORECT_USER_COUNTRY = 'INCORECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateError?: ValidateProfileError[];
}
