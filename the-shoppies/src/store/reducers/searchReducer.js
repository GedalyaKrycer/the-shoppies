import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    searching: false,
    loading: false,
    omdbResults: [],
    error: false,
    errorMessage: ''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_STARTED:
            return updateObject(state, {
                loading: true,
                searching: true
            });
        case actionTypes.SEARCH_SUCCESS:
            return updateObject(state, {
                loading: false,
                error: false,
                omdbResults: action.omdbResults
            });
        case actionTypes.SEARCH_FAILED:
            return updateObject(state, {
                loading: false,
                searching: false,
                error: true,
                errorMessage: action.error
            });
        case actionTypes.SEARCH_EMPTY:
            return updateObject(state, {
                loading: false,
                searching: false,
                error: false,
                omdbResults: []
            });
        default: return state;
    };
};

export default reducer;