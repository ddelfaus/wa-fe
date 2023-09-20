import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {useNavigate } from "react-router-dom";


// Define an async thunk for creating an account
export const createAccount = createAsyncThunk(
    "user/createAccount",
    async (userData, { rejectWithValue }) => {
        try {
            // Make an API request to create the account
            const response = await axios.post("http://localhost:9000/api/auth/register", userData);
             // Assuming the server responds with the created user data
            return response.data;
        } catch (error) {
            // handle any api request errors
            return rejectWithValue(error.response.data)
        }
    }
)
export const loginRequest = createAsyncThunk(
    "user/login",
    async (loginData, { rejectWithValue }) => {
      try {
        // Make an API request to log in the user
      
        const response = await axios.post("http://localhost:9000/api/auth/login", loginData);
        const { token, ...userData } = response.data; // Extract token and user data
        localStorage.setItem("token", token); // Store the token in localStorage
        // Assuming the server responds with the logged-in user data
   
        return { token, user: userData }
           
        
      } catch (error) {
        // Handle any API request errors
        return rejectWithValue(error.response.data);
      }
    }
  );
export const authSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        status: "idle", // Possible values: "idle", "loading", "succeeded", "failed"
        error: null, // Store API request errors here
    },
    reducers: {
     
        logout: (state) => {
            state.user = null;
            

            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(createAccount.pending, (state) => {
            state.status = "loading";
        })
        .addCase(createAccount.fulfilled, (state, action) => {
            state.status = "succeeded";
            
        })
        .addCase(createAccount.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
        .addCase(loginRequest.pending, (state) => {
            state.status = "loading";
        })
        .addCase(loginRequest.fulfilled, (state, action) => {
       
            state.status = "succeeded";
            state.user = action.payload;
          
        
        })
          .addCase(loginRequest.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });

    }
})


export const {login, logout} = authSlice.actions;

export const selectUser = (state) => state.user.user

export default authSlice.reducer

