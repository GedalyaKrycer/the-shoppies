import * as actionTypes from './actionTypes';


// Manually Stores all Nominations for Local Storage
export const setWinnerAuth = (authentication) => {
    return {
        type: actionTypes.WINNER_AUTH,
        auth: authentication
    }
}

