import * as actionTypes from './actionTypes';
import axios from 'axios';

// Removes error messages and results
export const clearResults = () => {
    return {
        type: actionTypes.SEARCH_EMPTY
    }
}

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

// Fires if there is an error from the API
export const searchFailed = (error) => {
    return {
        type: actionTypes.SEARCH_FAILED,
        error: error

    }
}


// Fires if there is an error from the API
export const searchOmdb = (searchTerm) => {

    return dispatch => {
        dispatch(searchStarted());

        // OMDB Movie API
        const omdbUrl = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_KEY}`;

        axios.get(omdbUrl)
            .then((res) => {
                console.log(res.data);
                if (res.data.Response) {
                    dispatch(searchSucceeded(res.data.Search))
                }
                if (res.data.Error) {
                    dispatch(searchFailed(res.data.Error));
                }


            })
            .catch((error) => {
                dispatch(searchFailed(error));
            })
    }

}

