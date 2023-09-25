import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth"


// get the whole move's library
export const fetchMoves = createAsyncThunk(
  "moves/fetchMoves",
  async () => {
    try {
      // Make an API request to fetch moves
      const response = await axiosWithAuth().get("http://localhost:9000/api/moves");
     
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// get User's move library
export const fetchUserMoves = createAsyncThunk(
  "moves/fetchUserMoves",
  async (userId) => {
    try {
      // Make an API request to fetch moves for specified user
      const response = await axiosWithAuth().get(`http://localhost:9000/api/moves/${userId}`);
      console.log(response, "this is move data")
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


// create a move 

export const createMove = createAsyncThunk(
  "moves/createMove",
  async (moveData) => {
    try {
      const response = await axiosWithAuth().post("http://localhost:9000/api/moves", moveData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


// delete a move

export const deleteMove = createAsyncThunk(
  "moves/deleteMove",
  async (moveId) => {
    try {
      // Make an API request to delete the move by its ID
      await axiosWithAuth().delete(`http://localhost:9000/api/moves/${moveId}`);
      return moveId; // Return the deleted move ID for reference
    } catch (error) {
      throw error;
    }
  }
);



const movesSlice = createSlice({
    name: "moves",
    initialState: {
    moves: [],
    status: "idle",
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
        //get all moves
        .addCase(fetchMoves.pending, (state) => {
        state.status = "loading";
        })
        .addCase(fetchMoves.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.moves = action.payload;
        })
        .addCase(fetchMoves.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        })
        //get moves by userID
        .addCase(fetchUserMoves.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.moves = action.payload;
        })
        //post a move
        .addCase(createMove.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Add the newly created move to the state
          state.moves.push(action.payload);
        })
        // delete a move
        
        .addCase(deleteMove.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Remove the deleted move from the state by its ID
          state.moves = state.moves.filter((move) => move.id !== action.payload);
        });
    },
});

export default movesSlice.reducer;

// Export actions for use in components
export const { /* any additional actions you may need */ } = movesSlice.actions;