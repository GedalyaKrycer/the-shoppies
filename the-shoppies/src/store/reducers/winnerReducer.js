import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    winnerAuthenticated: true,
    winnerList: []
};


// Reducer Helper Functions

const winnerAuth = (state, action) => {
    return updateObject(state, {
        winnerAuthenticated: action.auth
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WINNER_AUTH:
            return winnerAuth(state, action);
        default: return state;
    };
};

export default reducer;