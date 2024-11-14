// api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recipes';

export const getRecipes = async (filters = {}) => {
  const response = await axios.get(API_URL, { params: filters });
  return response.data.recipes;
};

export const addRecipe = async (recipe) => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};

export const updateRecipe = async (id, recipe) => {
  const response = await axios.put(`${API_URL}/${id}`, recipe);
  return response.data;
};

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
