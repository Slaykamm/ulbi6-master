import { Country } from 'entitles/Country';
import { Currency } from 'entitles/Currency';

export enum ValidateProfileError {
    INCORECT_USER_DATA = 'INCORECT_USER_DATA',
    INCORECT_USER_AGE = 'INCORECT_USER_AGE',
    INCORECT_USER_COUNTRY = 'INCORECT_USER_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency,
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    validateError?: ValidateProfileError[]
}
