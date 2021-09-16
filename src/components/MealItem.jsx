import React from 'react';
import { Link } from 'react-router-dom';

function MealItem({ strMeal, idMeal, strMealThumb }) {
    return (
        <div className="card">
            <div className="card-image">
                <img alt={strMeal} src={strMealThumb} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export default MealItem;
