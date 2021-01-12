import React from 'react';
import './metaDetailsMovieSearch.scss'

const MetaDetailsMovieSearch = (props) => {
    return (
        <div
            className="result-row"
            style={{ '--delay': props.index }}>
            <div className="result-row__meta-info">
                <h3>{props.title}</h3>
                <h4>{props.year}  •  {props.type}</h4>
            </div>

        </div>
    )
}

export default MetaDetailsMovieSearch;
