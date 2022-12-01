import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWIthManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWIthManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
