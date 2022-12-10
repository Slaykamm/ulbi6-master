import { Country } from '@/entitles/Country';
import { Currency } from '@/entitles/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { updateProfileData } from './updateProfileData';

const data = {
    first: 'Andrey',
    lastname: 'Ivanov',
    age: 40,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    username: 'admin',
    id: '1',
};

describe('updateProfileData.test.ts.test', () => {
    test('updateProfileData.test SUCCESS', async () => {
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('updateProfileData.test REJECT', async () => {
        // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });
    test('updateProfileData.error ', async () => {
        // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
        // @ts-ignore
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORECT_USER_DATA,
        ]);
    });
});
