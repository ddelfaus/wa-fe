import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { fetchMoveById, selectSelectedMove } from '../../features/workout/movesSlice';
import { selectUserId } from '../../features/auth/authSlice';

import { editMove } from '../../features/workout/movesSlice';


function EditMove
() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {moveId} = useParams();  // Get the moveId from the route parameter
  const selectedMove = useSelector(selectSelectedMove);
  const userId = useSelector(selectUserId)

  const [formData, setFormData] = useState({});

  console.log(selectedMove, "test")
  useEffect(() => {
    // Fetch the move data using the moveId when the component mounts
    dispatch(fetchMoveById(moveId));
  }, [dispatch, moveId]);


  useEffect(() => {
    if (selectedMove) {
      setFormData({
        title: selectedMove[0].title,
        description: selectedMove[0].description,
        difficulty_rating: selectedMove[0].difficulty_rating,
        muscle_group: selectedMove[0].muscle_group,
        weight_used: selectedMove[0].weight_used,
        equipment_required: selectedMove[0].equipment_required,
        video_url: selectedMove[0].video_url,
        reps_completed: selectedMove[0].reps_completed,
        user_id: userId,
      });
    } else {
      // Handle the case where selectedMove is still loading or not available
    }
  }, [selectedMove, userId]);

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
    console.log("sent data", formData, moveId)
  
    dispatch(editMove( moveId, {updatedMoveData: formData }))
    navigate("/dashboard/userExerciseLibrary")
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

export default EditMove
;