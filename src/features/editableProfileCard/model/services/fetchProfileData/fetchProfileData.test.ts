import { Country } from 'entitles/Country';
import { Currency } from 'entitles/Currency';
import { userActions } from 'entitles/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'Andrey',
    lastname: 'Ivanov',
    age: 40,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    username: 'admin',
};

describe('fetchProfileData.test.ts.test', () => {
    test('fetchProfileData.test SUCCESS', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('loginByUsername.test REJECT', async () => {
        // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('2');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
