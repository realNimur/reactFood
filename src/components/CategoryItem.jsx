import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
}) {
    return (
        <div className="card">
            <div className="card-image">
                <img alt={strCategory} src={strCategoryThumb} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 80)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export default CategoryItem;
