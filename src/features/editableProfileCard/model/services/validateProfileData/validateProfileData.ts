import { Profile } from 'entitles/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const errors: ValidateProfileError[] = [];
    const {
        first, lastname, age, country,
    } = profile;

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORECT_USER_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORECT_USER_COUNTRY);
    }

    return errors;
};
