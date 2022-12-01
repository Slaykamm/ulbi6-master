import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return vounter value', () => {
        // eslint-disable-next-line no-undef
        const state: DeepPartial<StateSchema> = {
            counter: { value: 2 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 2 });
    });
});
