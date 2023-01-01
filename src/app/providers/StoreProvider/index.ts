import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema,
    ReduxStoreWIthManager,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkExtraArg,
    ThunkConfig,
};

export type { AppDispatch, ReduxStoreWIthManager, StateSchemaKey };
