import { createSelector } from '@reduxjs/toolkit';
import { counterActions, counterReducer } from '../../slice/counterSlice';
import { CounterSchema } from '../../type/counterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
