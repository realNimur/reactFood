import React from 'react';
import MealItem from './MealItem';

function MealsList({ meals }) {
    return (
        <div className="list">
            {meals.map((el) => (
                <MealItem key={el.idMeal} {...el} />
            ))}
        </div>
    );
}

export default MealsList;
