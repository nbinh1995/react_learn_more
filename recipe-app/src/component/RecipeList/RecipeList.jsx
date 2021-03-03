import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Recipe from './recipe/Recipe';
import './recipelist.css';

function RecipeList() {
  const APP_ID = "efeee370"; 
  const APP_KEY = "cc1b44fd4a8ce9720d0a7a4b7cdfc62a";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.data;
    
    setRecipes(data.hits);
  }
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = (event) => {
     event.preventDefault();
    setQuery(search);
    setSearch('');
  }
    return (
        <div className='recipes-app'>
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map((recipe,index) =>{
                return (
                    <Recipe
                    key={index} 
                    nameLabel={recipe.recipe.label} 
                    calories={recipe.recipe.calories} 
                    pathImage={recipe.recipe.image}
                    recipeFood = {recipe.recipe.ingredients}
                    />
                );
                })}
            </div>
        </div>
    );
}

export default RecipeList;