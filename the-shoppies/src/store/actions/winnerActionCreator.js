import * as actionTypes from './actionTypes';


// Authenticates that the user has nominated a winner
export const setWinnerAuth = (authentication) => {
    return {
        type: actionTypes.WINNER_AUTH,
        auth: authentication
    }
}


