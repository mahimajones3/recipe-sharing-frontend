import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../api';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, [category, ingredient]);

  const fetchRecipes = async () => {
    const filters = {};
    if (category) filters.category = category;
    if (ingredient) filters.ingredient = ingredient;
    const data = await getRecipes(filters);
    setRecipes(data);
  };

  return (
    <div>
      <h2>Recipe List</h2>
      
      <div>
        <label>Filter by Category:</label>
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>

        <label>Search by Ingredient:</label>
        <input
          type="text"
          placeholder="e.g., Chicken"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </div>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>Category: {recipe.category}</p>
              <p>Cooking Time: {recipe.cookingTime} mins</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
