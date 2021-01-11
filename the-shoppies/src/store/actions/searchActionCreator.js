import * as actionTypes from './actionTypes';

// Sets the loading status to true
export const searchStarted = () => {
    return {
        type: actionTypes.SEARCH_STARTED,
        loading: true
    }
}

