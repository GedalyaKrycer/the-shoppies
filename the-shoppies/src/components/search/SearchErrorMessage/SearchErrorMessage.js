import React from 'react';
import './searchErrorMessage.scss';

const SearchErrorMessage = (props) => {
    return (
        <div className="search-error">
            <p><strong>{props.error}</strong></p>
            <p>Please adjust your search.</p>
        </div>
    )
}

export default SearchErrorMessage;
