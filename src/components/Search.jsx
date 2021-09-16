import React, { useState } from 'react';

function Search({ cb }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    const handleInput = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    placeholder="search"
                    id="search-fields"
                    onKeyDown={handleKey}
                    onChange={handleInput}
                    value={value}
                />
                <button className="btn search__btn" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default Search;
