import { CounterSchema } from '../type/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('getCounterValue', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 2 };
        expect(
            counterReducer(state, counterActions.decrement()),
        )

            .toEqual({ value: 1 });
    });
    test('decrement empty', () => {
        expect(
            counterReducer(undefined, counterActions.decrement()),
        )

            .toEqual({ value: -1 });
    });
    test('increment ', () => {
        const state: CounterSchema = { value: 2 };
        expect(
            counterReducer(state, counterActions.increment()),
        )

            .toEqual({ value: 3 });
    });
});
test('increment empty', () => {
    expect(
        counterReducer(undefined, counterActions.increment()),
    )

        .toEqual({ value: 1 });
});
