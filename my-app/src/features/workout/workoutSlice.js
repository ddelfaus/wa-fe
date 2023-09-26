import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosWithAuth from "../auth/axiosWithAuth"


// get the whole move's library
export const fetchWorkouts = createAsyncThunk(
  "workouts/fetchWorkouts",
  async () => {
    try {
      // Make an API request to fetch workouts
      const response = await axiosWithAuth().get("http://localhost:9000/api/workouts");
     
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// get User's move library
export const fetchUserWorkouts = createAsyncThunk(
  "workouts/fetchUserWorkouts",
  async (userId) => {
    try {
      // Make an API request to fetch workouts for specified user
      const response = await axiosWithAuth().get(`http://localhost:9000/api/workouts/${userId}`);
      console.log(response, "this is move data")
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// get a specific move by move ID

export const fetchWorkoutById = createAsyncThunk(
  'workouts/fetchWorkoutById',
  async (workoutId) => {
    try {
      const response = await axiosWithAuth().get(`http://localhost:9000/api/workouts/workout/${workoutId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


// create a move 

export const createWorkout = createAsyncThunk(
  "workouts/createWorkout",
  async (workoutData) => {
    try {
      const response = await axiosWithAuth().post("http://localhost:9000/api/workouts", workoutData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const editWorkout = createAsyncThunk(
  "workouts/editWorkout",
  async ( { WorkoutId, updatedWorkoutData}) => {
    try {
      
      console.log(updatedWorkoutData, "wth is going on????")
      // Make an API request to update the workout by its ID
      const response = await axiosWithAuth().put(
        `http://localhost:9000/api/workouts/${WorkoutId}`, updatedWorkoutData);
      return response.data; // Return the updated workout data
    } catch (error) {
      throw error;
    }
  }
);

// delete a workout

export const deleteWorkout = createAsyncThunk(
  "workouts/deleteWorkout",
  async (workoutId) => {
    try {
      // Make an API request to delete the workout by its ID
      await axiosWithAuth().delete(`http://localhost:9000/api/workouts/${workoutId}`);
      return workoutId; // Return the deleted workout ID for reference
    } catch (error) {
      throw error;
    }
  }
);



const workoutsSlice = createSlice({
    name: "workouts",
    initialState: {
    workouts: [],
    selectedWorkout: null,
    status: "idle",
    error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
        //get all Workouts
        .addCase(fetchWorkouts.pending, (state) => {
        state.status = "loading";
        })
        .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workouts = action.payload;
        })
        .addCase(fetchWorkouts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        })
        //get a specific Workout
        .addCase(fetchWorkoutById.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchWorkoutById.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.selectedWorkout = action.payload; // Set the selected Workout
        })
        .addCase(fetchWorkoutById.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })

        //get Workouts by userID
        .addCase(fetchUserWorkouts.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.workouts = action.payload;
        })
        //post a workout
        .addCase(createWorkout.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Add the newly created move to the state
          state.workouts.push(action.payload);
        })

        //edit workout

        .addCase(editWorkout.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(editWorkout.fulfilled, (state, action) => {
          state.status = 'succeeded';
          // Find the index of the edited workout in the state and update it
          const editedWorkoutIndex = state.workouts.findIndex(
            (workout) => workout.id === action.payload.id
          );
          if (editedWorkoutIndex !== -1) {
            state.workouts[editedWorkoutIndex] = action.payload;
          }
        })
        .addCase(editWorkout.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })


     
      

        // delete a Workout

        .addCase(deleteWorkout.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Remove the deleted workout from the state by its ID
          state.workouts = state.workouts.filter((workout) => workout.id !== action.payload);
        });
    },
});

export const selectSelectedWorkout = (state) => state.workouts.selectedWorkout;


export default workoutsSlice.reducer;

// Export actions for use in components
export const { /* any additional actions you may need */ } = workoutsSlice.actions;