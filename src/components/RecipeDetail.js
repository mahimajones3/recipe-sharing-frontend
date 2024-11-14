import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../api';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    const data = await getRecipes();
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  };

  const handleDelete = async () => {
    await deleteRecipe(id);
    navigate('/');
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Cooking Time: {recipe.cookingTime} mins</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Instructions: {recipe.instructions}</p>

      <button onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RecipeDetail;
