import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to add an exercise to a workout
export const addExerciseToWorkout = createAsyncThunk(
  "workoutExercises/addExerciseToWorkout",
  async ({ exerciseId, workoutId }, { dispatch, rejectWithValue }) => {
    try {
      // Make an API request to add the exercise to the workout
      const response = await axios.post(`/api/workouts/${workoutId}/exercises`, {
        exerciseId: exerciseId,
      });

      // Return the updated workout data
      return response.data;
    } catch (error) {
      // Handle errors and provide an error message
      return rejectWithValue("Failed to add exercise to the workout");
    }
  }
);

const workoutExercisesSlice = createSlice({
  name: "workoutExercises",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExerciseToWorkout.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(addExerciseToWorkout.fulfilled, (state, action) => {
        // Update the state with the new workout data
        return action.payload;
      })
      .addCase(addExerciseToWorkout.rejected, (state, action) => {
        // Handle rejected state if needed
      });
  },
});

export default workoutExercisesSlice.reducer;