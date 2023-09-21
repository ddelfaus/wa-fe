import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import axiosWithAuth from "../auth/axiosWithAuth"

export const fetchMoves = createAsyncThunk(
  "moves/fetchMoves",
  async () => {
    try {
      // Make an API request to fetch moves
      const response = await axios.get("http://localhost:9000/api/moves");
      console.log(response)
      return response.data;
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
        });
    },
});

export default movesSlice.reducer;

// Export actions for use in components
export const { /* any additional actions you may need */ } = movesSlice.actions;