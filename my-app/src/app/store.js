import { configureStore,combineReducers } from "@reduxjs/toolkit"

import authReducer from '../features/auth/authSlice'
import movesReducer from '../features/workout/movesSlice'
import workoutReducer from "../features/workout/workoutSlice"
import workoutExercisesSlice from "../features/workout/workoutExercisesSlice"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"


const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    user: authReducer,
    moves: movesReducer,
    workouts: workoutReducer,
    workoutExercises: workoutExercisesSlice
})


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})