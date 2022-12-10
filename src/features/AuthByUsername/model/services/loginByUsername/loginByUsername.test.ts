import { userActions } from '@/entitles/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername.test.ts.test', () => {
    // // мокаем диспатч и гет Стейт
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    const userValue = { username: '123', id: '1' };
    // beforeEach(() => {
    //     // мокаем вызовы функций
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('loginByUsername.test SUCCESS', async () => {
    //     // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });

    // test('loginByUsername.test REJECT', async () => {
    //     // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('Error');
    // });

    // мокаем диспатч и гет Стейт

    test('loginByUsername.test SUCCESS', async () => {
        // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const result = await thunk.callThunk({ username: '123', password: '123' });

        // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('loginByUsername.test REJECT', async () => {
        // тут в замоканный аксиос мокаем вызов метода пост на значение. Т.к. возвращает промис - резолвим
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });
        // дожидаемся результата вызова асинкФанка, что вернет нам экшн со значениями.
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Error');
    });
});
