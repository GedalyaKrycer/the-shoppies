import * as actionTypes from './actionTypes';
import axios from 'axios';

// // Tells reducer the nomination was canceled
export const cancelNomination = (movieTitle) => {
    return {
        type: actionTypes.NOMINATION_CANCELED,
        movieTitle: movieTitle
    }
}

// Lets the reducer know the query to the API has started
export const nominationQueryStarted = () => {
    return {
        type: actionTypes.NOMINATED_STARTED
    }
}

// Receives the result from OMDB API Call 
export const nominationQuerySucceeded = (result) => {
    console.log("Nomination ActionCreator Success:", result)
    return {
        type: actionTypes.NOMINATED_SUCCESS,
        omdbResult: result
    }
}

// Fires if there is an error from the API
export const nominationQueryFailed = (error) => {
    return {
        type: actionTypes.NOMINATED_FAILED,
        error: error

    }
}

// Searches the API asynchronously 
export const queryOmdbNomination = (movieTitle, movieYear) => {

    return dispatch => {
        dispatch(nominationQueryStarted());

        // OMDB Movie API
        const omdbUrl = `https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=${process.env.REACT_APP_OMDB_KEY}`;

        axios.get(omdbUrl)
            .then((res) => {
                const response = res.data;
                dispatch(nominationQuerySucceeded(response));

            })
            .catch((error) => {
                dispatch(nominationQueryFailed(error));
            })
    }

}

