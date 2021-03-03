import React from 'react';
import PropTypes from 'prop-types';
import './recipe.css';

Recipe.propTypes = {
    nameLabel : PropTypes.string,
    calories :  PropTypes.number,
    pathImage :  PropTypes.string,
    recipeFood : PropTypes.array
};

Recipe.defaultProps = {
    nameLabel : '',
    calories : '',
    pathImage: '',
    recipeFood: []
};
function Recipe(props) {
    const {nameLabel,calories,pathImage, recipeFood} = props;

    return (
        <div className='recipe'>
            <h1>{nameLabel}</h1>
            <ol>
                {recipeFood.map((recipe,index) => (
                    <li key={index}>{recipe.text}</li>
                ))}
            </ol>
            <p><i><ins>Calories:</ins> </i>{+calories.toFixed(2)}</p>
            <img src={pathImage} alt={nameLabel}/>
        </div>
    );
}

export default Recipe;