import { configureStore,combineReducers } from "@reduxjs/toolkit"

import authReducer from '../features/auth/authSlice'
import movesReducer from '../features/workout/movesSlice'
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"


const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    user: authReducer,
    moves: movesReducer
})


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})