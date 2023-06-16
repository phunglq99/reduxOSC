import React, { useState } from "react";

const SearchBar = ({onSubmit}) => {
    const [ term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <form action="" onSubmit={handleFormSubmit}>
                <input type="text" value={term} onChange={handleChange} />
                {term.length < 3 && 'Term must be longer'}
            </form>
        </div>
    )
};

export default SearchBar;
