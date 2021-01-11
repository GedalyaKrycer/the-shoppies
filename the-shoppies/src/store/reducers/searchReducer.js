import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    loading: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_STARTED:
            return updateObject(state, { loading: true });
        default: return state;
    };
};

export default reducer;