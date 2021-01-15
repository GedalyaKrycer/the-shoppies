import React from 'react';
import './movieSearchConfirmation.scss';
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary';


const MovieSearchConfirmation = () => {
    return (
        <div className="nomConfirm">
            <h2>Great Choices!</h2>
            <p>You have reached the 5 film limit. Remove any film to select a new one.</p>
            <ButtonPrimary >Reveal Winner!</ButtonPrimary>
        </div>
    )
}

export default MovieSearchConfirmation;