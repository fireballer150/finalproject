import { combineReducers } from 'redux';
import createRoomReducer from './createRoomReducer';
import studyRoomListReducer from './studyRoomListReducer';
import roomDetailReducer from './roomDetailReducer';
import user_reducer from './user_reducer';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';


const persistConfig = {
  key: 'root',
  storage: storageSession,
};

export const rootReducer = combineReducers({
  createRoomReducer,
  studyRoomListReducer,
  roomDetailReducer,
  user_reducer,
});

export default persistReducer(persistConfig, rootReducer);
