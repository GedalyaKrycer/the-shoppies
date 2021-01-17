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

    // Nominations Stored In Local Storage
    const localStorageList = JSON.parse(localStorage.getItem('nominationList'));


    // Pulled from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    const shuffle = (array) => {
        let m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        return array;
    }

    const handleRevealWinner = () => {

        // Authenticates the user can see the winner page
        setWinnerAuth(action.setWinnerAuth(true));

        // Shuffles the nomination list to pick a winner
        shuffle(localStorageList);

        // Stores winner list to local storage
        localStorage.setItem('winnerList', JSON.stringify(localStorageList));

        // Sends user to the winner page
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