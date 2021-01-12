import React from 'react';
import './metaDetailsMovieSearch.scss';
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary';

const MetaDetailsMovieSearch = (props) => {
    return (
        <div
            className={`result-row ${props.exitResults ? "result-row--exit" : null}`}
            style={{ '--delay': props.index }}>
            <div className="result-row__meta-info">
                <h3>{props.title}</h3>
                <h4>{props.year}  • {props.type}</h4>
            </div>
            <ButtonPrimary
                disable={props.disable}
                handleClick={props.handleClick}
            >Nominate</ButtonPrimary>

        </div>
    )
}

export default MetaDetailsMovieSearch;
