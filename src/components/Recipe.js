import React from 'react'
import style from '../recipe.module.css'

const  Recipe = (props) => {
    const {label, image, calories, ingredients} = props.recipe.recipe;
    return (
        <div className={style.recipe}>
            <h1 className={style.titles}>{label}</h1>
            <p className={style.titles}>Ingredients:
                <ol className={style.lists}>
                    {ingredients.map(ingredient => (
                        <li key={ingredient.text}>{ingredient.text}</li>
                    ))}
                </ol>
            </p>
            <p className={style.titles}>Calories: {calories}</p>
            <img src={image} alt="" className={style.image}/>
        </div>
    )
}

export default Recipe;
