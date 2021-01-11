import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    searching: false,
    loading: false,
    omdbResults: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_STARTED:
            return updateObject(state, { loading: true, searching: true });
        case actionTypes.SEARCH_SUCCESS:
            return updateObject(state, { loading: false, omdbResults: action.omdbResults });
        default: return state;
    };
};

export default reducer;