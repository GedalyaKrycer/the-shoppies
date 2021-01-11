import * as actionTypes from './actionTypes';

// Lets the reducer know the search has started
export const searchStarted = () => {
    return {
        type: actionTypes.SEARCH_STARTED
    }
}

