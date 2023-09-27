import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { fetchWorkoutById, selectSelectedWorkout, editWorkout } from '../../features/workout/workoutSlice';
import { selectUserId } from '../../features/auth/authSlice';



function EditWorkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {workoutId} = useParams();  // Get the moveId from the route parameter
  const selectedWorkout = useSelector(selectSelectedWorkout);
  const userId = useSelector(selectUserId)

  const [formData, setFormData] = useState({});


  useEffect(() => {
    // Fetch the move data using the moveId when the component mounts
    dispatch(fetchWorkoutById(workoutId));
  }, [dispatch, workoutId]);


  useEffect(() => {
    if (selectedWorkout) {
      setFormData({
        title: selectedWorkout[0].title,
        description: selectedWorkout[0].description,
        equipment_required: selectedWorkout[0].equipment_required,
     
        user_id: userId,
      });
    } else {
      // Handle the case where selectedMove is still loading or not available
    }
  }, [selectedWorkout, userId]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent data", formData, workoutId)
    
    dispatch(editWorkout({ workoutId, updatedWorkoutData: formData }))
    navigate("/dashboard/userWorkoutLibrary")
    // Submit the formData to your server or perform any desired actions
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Edit Workout</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form input fields here */}
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>

        <label>
        Description:
        <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
        />
        </label>

        <label>
        Equipment Required:
        <input
            type="text"
            name="equipment_required"
            value={formData.equipment_required}
            onChange={handleInputChange}
        />
        </label>
        
        <button type="submit">Edit Workout</button>
      </form>
    </div>
  );
}

export default EditWorkout
;