import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    loading: false,
    omdbNominationResult: [],
    error: false,
    errorMessage: '',
    nominationList: [],
    nominatedAlready: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOMINATED_STARTED:
            return updateObject(state, {
                loading: true
            });
        case actionTypes.NOMINATED_SUCCESS:
            return updateObject(state, {
                loading: false,
                error: false,
                omdbNominationResult: action.omdbResult
            });
        case actionTypes.NOMINATED_FAILED:
            return updateObject(state, {
                loading: false,
                searching: false,
                error: true,
                errorMessage: action.error
            });
        case actionTypes.NOMINATED_ALREADY:
            return updateObject(state, {
                nominatedAlready: true
            });
        case actionTypes.NOMINATION_CANCELED:
            return updateObject(state, {
                nominatedAlready: false,

            });
        default: return state;
    };
};

export default reducer;