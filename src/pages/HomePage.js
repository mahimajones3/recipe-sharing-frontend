import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from '../components/RecipeList';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the Recipe Sharing Platform</h1>
        <p>Discover, create, and share your favorite recipes!</p>
      </header>
      
      <div style={{ margin: '20px 0' }}>
        <Link to="/add">
          <button style={{ padding: '10px 15px', fontSize: '16px' }}>Add New Recipe</button>
        </Link>
      </div>
      
      <RecipeList />
    </div>
  );
};

export default HomePage;
