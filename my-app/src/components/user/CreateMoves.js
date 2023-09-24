import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMove } from '../../features/workout/movesSlice'
import { useNavigate } from 'react-router-dom'


function CreateMoves() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty_rating: 1,
    muscle_group: '',
    weight_used: '',
    equipment_required: '',
    video_url: '',
    reps_completed: 0,
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
    dispatch(createMove(formData))
    navigate("/dashboard")
    // Submit the formData to your server or perform any desired actions
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Create a New Move</h2>
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
        Muscle Group:
        <input
            type="text"
            name="muscle_group"
            value={formData.muscle_group}
            onChange={handleInputChange}
        />
        </label>

        <label>
        Weight Used:
        <input
            type="text"
            name="weight_used"
            value={formData.weight_used}
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

        <label>
        Video URL:
        <input
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={handleInputChange}
        />
        </label>

        <label>
        Reps Completed:
        <input
            type="number"
            name="reps_completed"
            value={formData.reps_completed}
            onChange={handleInputChange}
        />
        </label>
        
        <button type="submit">Create Move</button>
      </form>
    </div>
  );
}

export default CreateMoves;