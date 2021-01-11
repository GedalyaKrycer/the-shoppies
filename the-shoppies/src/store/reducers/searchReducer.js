import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    searchFilled: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.AUTH_START:
        // return authStart(state, action);
        // default: return state;
    };

    return state;
};

export default reducer;