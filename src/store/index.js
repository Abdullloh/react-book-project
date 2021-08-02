import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducers';
const rootReducer = combineReducers({
    user: userReducer,
  });
  const store = createStore(rootReducer);
  export default store;   