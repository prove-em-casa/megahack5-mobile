import { createStore, combineReducers } from 'redux';

import shopBag from './ducks/shopBag';

const rootReducer = combineReducers({
  shopBag,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store };
