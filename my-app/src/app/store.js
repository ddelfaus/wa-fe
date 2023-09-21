import { configureStore } from "@reduxjs/toolkit"

import authReducer from '../features/auth/authSlice'
import movesReducer from '../features/workout/movesSlice'


export const store = configureStore({
    reducer : {
        user: authReducer,
        moves: movesReducer
    }
})