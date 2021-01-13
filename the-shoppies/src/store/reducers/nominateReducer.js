import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    loading: false,
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
            let updatedNominationList = null;

            const movieAlreadyNominated = state.nominationList.find(result => result.Title === action.omdbResult.Title)

            if (movieAlreadyNominated) {
                updatedNominationList = state.nominationList;
            } else {
                updatedNominationList = state.nominationList.concat(action.omdbResult)
            }

            return updateObject(state, {
                loading: false,
                error: false,
                nominationList: updatedNominationList
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
            const updatedList = state.nominationList.filter(movieTitle => movieTitle !== action.movieTitle);
            return updateObject(state, {
                nominatedAlready: false,
                nominationList: updatedList
            });
        default: return state;
    };
};

export default reducer;