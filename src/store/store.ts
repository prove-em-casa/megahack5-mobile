import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import shopBag from './ducks/shopBag';
import auth from './ducks/auth';

const rootReducer = combineReducers({
  shopBag,
  auth,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['shopBag'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(persistedReducer);

const persistor = persistStore(store, null);

export { store, persistor };
