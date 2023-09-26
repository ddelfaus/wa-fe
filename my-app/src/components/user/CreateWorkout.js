import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkout } from '../../features/workout/workoutSlice';
import { useNavigate } from 'react-router-dom'
import { selectUserId } from '../../features/auth/authSlice';


function CreateWorkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userId = useSelector(selectUserId)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty_rating: 1,
    equipment_required: '',
    user_id: userId
  });

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
    dispatch(createWorkout(formData))
    navigate("/dashboard")
    // Submit the formData to your server or perform any desired actions
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Workout Title</h2>
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
        Difficulty Rating:
        <input
            type="number"
            name="difficulty_rating"
            value={formData.difficulty_rating}
            onChange={handleInputChange}
        />
        </label>

        <label>
        Equipment:
        <input
            type="text"
            name="Equipment"
            value={formData.muscle_group}
            onChange={handleInputChange}
        />
        </label>
        
        <button type="submit">Create Workout</button>
      </form>
    </div>
  );
}

export default CreateWorkout;