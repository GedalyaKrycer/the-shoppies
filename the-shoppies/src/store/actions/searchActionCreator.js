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
                const response = res.data;
                if (response.Response) {
                    let resultList = response.Search;

                    // Checks if the results list is an array
                    if (Array.isArray(resultList)) {

                        // If it is more then 5 items it limits to 5
                        resultList = resultList.length > 5 ? resultList.slice(0, 5) : resultList;

                        // Loop to ensure series have an end date
                        resultList.forEach(result => {

                            // Creates an array of the year
                            let resultYearArray = result.Year.split('');

                            // If there is no end date this will add a "-Present"
                            if (resultYearArray.length < 6) {
                                let updatedResultYear = resultYearArray.concat("–Present")

                                return result.Year = updatedResultYear.join("")
                            }
                        });
                    }

                    dispatch(searchSucceeded(resultList))
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

