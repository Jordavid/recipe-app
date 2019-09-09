import React , { useEffect, useState } from 'react'
import Conf from '../conf';
import Recipe from './Recipe';

const  Home = () => {

    // States Declaration
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    // API Configuration
    const conf = Conf();
    const APP_ID = conf.appID;
    const APP_KEY = conf.appKey;
    const exRequest = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    useEffect( () => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(exRequest);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        if(search !== ''){
            setQuery(search);
            setSearch("");
        }
    }
    return (
        <div>
            <h1>Find your best recipe from React</h1>
            <form action="" onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" placeholder="What are you lookig for?" onChange={updateSearch} name='q' value={search}/>
                <button type="submit" className="search-button"> Search </button>
            </form>
            <div className="recipes">
                {
                    recipes.map((recipe) => (
                    <Recipe 
                        key={recipe.recipe.label}
                        recipe={recipe} />
                ))
                
                }
            </div>
          
      </div>
    )
}


export default Home;