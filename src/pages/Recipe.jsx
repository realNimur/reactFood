import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

function Recipe() {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    const { strMeal, strArea, strInstructions, strMealThumb, strYoutube } =
        recipe;
    return (
        <>
            {!strMeal ? (
                <Preloader />
            ) : (
                <div>
                    <img
                        className="recipe__img"
                        src={strMealThumb}
                        alt={strMeal}
                    />
                    <h1>{strMeal}</h1>
                    {strArea ? <p>Country: {strArea}</p> : null}
                    <p>{strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {strYoutube ? (
                        <div className="row">
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                Video instruction
                            </h5>
                            <iframe
                                title={strMeal}
                                className="recipe__iframe"
                                src={`https://www.youtube.com/embed/${strYoutube.substr(
                                    strYoutube.length - 11
                                )}`}
                                allowfullscreen
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                        </div>
                    ) : null}

                    <button className="btn" onClick={goBack}>
                        Go back
                    </button>
                </div>
            )}
        </>
    );
}

export default Recipe;
