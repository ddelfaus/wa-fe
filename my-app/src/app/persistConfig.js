import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage library
import authReducer from '../features/auth/authSlice';
import movesReducer from '../features/workout/movesSlice';

const authPersistConfig = {
  key: 'auth', // This is the storage key
  storage, // The storage engine you want to use
};


const movesPersistConfig  = {
    key: 'moves', // This is the storage key
    storage, // The storage engine you want to use
  };


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedMovesReducer = persistReducer(movesPersistConfig, movesReducer);

export { persistedAuthReducer, persistedMovesReducer };