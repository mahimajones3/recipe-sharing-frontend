import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../api';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = {
      title,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      instructions,
      category,
      cookingTime: parseInt(cookingTime)
    };

    await addRecipe(recipe);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Recipe</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Ingredients (comma-separated):</label>
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

      <label>Instructions:</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />

      <label>Category:</label>
      <select onChange={(e) => setCategory(e.target.value)} value={category} required>
        <option value="">Select a category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      <label>Cooking Time (minutes):</label>
      <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
