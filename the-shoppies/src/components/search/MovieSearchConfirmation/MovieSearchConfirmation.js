import React from 'react';
import './movieSearchConfirmation.scss';
import ButtonPrimary from '../../ui/ButtonPrimary/ButtonPrimary';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as action from '../../../store/actions/index';


const MovieSearchConfirmation = () => {

    // Redux Dispatch Hooks
    const setWinnerAuth = useDispatch();

    // React Router 
    const history = useHistory();

    const handleRevealWinner = () => {
        console.log("Reveal Winner Clicked")
        setWinnerAuth(action.setWinnerAuth(true));
        history.push("/winner");
    }

    return (
        <div className="nomConfirm">
            <h2>Great Choices!</h2>
            <p>You have reached the 5 film limit. Remove any film to select a new one.</p>
            <ButtonPrimary handleClick={handleRevealWinner} >Reveal Winner!</ButtonPrimary>
        </div>
    )
}

export default MovieSearchConfirmation;