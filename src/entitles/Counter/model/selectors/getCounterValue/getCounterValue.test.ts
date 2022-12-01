import { counterActions, counterReducer } from '../../slice/counterSlice';
import { CounterSchema } from '../../type/counterSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 2 };
        expect(
            counterReducer(state, counterActions.decrement()),
        )

            .toEqual({ value: 1 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 2 };
        expect(
            counterReducer(state, counterActions.decrement()),
        )

            .toEqual({ value: 1 });
    });
});
