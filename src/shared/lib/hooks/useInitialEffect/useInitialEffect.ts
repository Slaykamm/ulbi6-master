import { useEffect } from 'react';
import { callbackify } from 'util';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
