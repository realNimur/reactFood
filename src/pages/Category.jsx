import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';

function Category() {
    const [meals, setMeals] = useState([]);
    const { name } = useParams();

    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className="btn" onClick={goBack}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
}
export { Category };
