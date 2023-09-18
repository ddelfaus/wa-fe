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
        logout: (state) => {
            state.user = null;
            console.log("I ran bro")
        },
    },
})


export const {login, logout} = authSlice.actions;


export const selectUser = (state) => state.user.user


export default authSlice.reducer

