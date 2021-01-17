import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    winnerAuthenticated: true,
    winnerList: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.WINNER_AUTH:
            return updateObject(state, {
                winnerAuthenticated: action.auth
            });
        default: return state;
    };
};

export default reducer;