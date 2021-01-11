import * as actionTypes from './actionTypes';

// Lets the reducer know the search has started
export const searchStarted = () => {
    return {
        type: actionTypes.SEARCH_STARTED
    }
}

// Receives the results from OMDB API Call 
export const searchSucceeded = (results) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        omdbResults: results

    }
}

