import {createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "user",
    initialState: {
        user:null
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload;

        },
        logut: (state) => {
            state.user = null;
        },
    },
})


export const {login, logut} = authSlice.actions;


export const selectUser = (state) => state.user.user


export default authSlice.reducer

