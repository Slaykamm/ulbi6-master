import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter22', () => {
    test('with only first param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('5');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('6');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });
});
