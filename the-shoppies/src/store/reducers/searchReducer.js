import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    searching: false,
    loading: false,
    omdbResults: [],
    error: false,
    errorMessage: ''
};


// Reducer Helper Functions

const searchStarted = (state, action) => {
    return updateObject(state, {
        loading: true,
        searching: true
    });
}

const searchSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: false,
        omdbResults: action.omdbResults
    });
}

const searchFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        searching: false,
        error: true,
        errorMessage: action.error
    });
}

const searchEmpty = (state, action) => {
    return updateObject(state, {
        loading: false,
        searching: false,
        error: false,
        omdbResults: []
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_STARTED:
            return searchStarted(state, action);
        case actionTypes.SEARCH_SUCCESS:
            return searchSuccess(state, action);
        case actionTypes.SEARCH_FAILED:
            return searchFailed(state, action);
        case actionTypes.SEARCH_EMPTY:
            return searchEmpty(state, action);
        default: return state;
    };
};

export default reducer;