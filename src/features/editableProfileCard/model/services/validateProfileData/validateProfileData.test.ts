import { Country } from '@/entitles/Country';
import { Currency } from '@/entitles/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Andrey',
    lastname: 'Ivanov',
    age: 40,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    username: 'admin',
};

describe('validateProfileData.test.ts.test', () => {
    test('validateProfileData.test SUCCESS', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('lwihtout first and second name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
        ]);
    });
    test('lwihtout age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_AGE,
        ]);
    });
    test('lwihtout country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_COUNTRY,
        ]);
    });
    test('lwihtout all errors', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
            ValidateProfileError.INCORECT_USER_AGE,
            ValidateProfileError.INCORECT_USER_COUNTRY,
        ]);
    });
});
