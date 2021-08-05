import { createStore, combineReducers,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import userReducer from './reducers/userReducers';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
const rootReducer = combineReducers({
    user: userReducer,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(logger)));
  const persistor = persistStore(store);
  export { store as default, persistor }