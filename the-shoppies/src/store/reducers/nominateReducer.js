import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utilities/updateObject';

const initialState = {
    loading: false,
    error: false,
    errorMessage: '',
    nominationList: [],
    nominationsCompleted: false
};


// Reducer Helper Functions

const nominationStarted = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}

const nominationSuccess = (state, action) => {
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
}

const nominationFailed = (state, action) => {
    return updateObject(state, {
        loading: false,
        searching: false,
        error: true,
        errorMessage: action.error
    });
}

const nominationCanceled = (state, action) => {
    const updatedList = state.nominationList.filter(movieTitle => movieTitle.Title !== action.movieTitle);
    return updateObject(state, {
        nominationList: updatedList,
        nominationsCompleted: false
    });
}

const nominationStored = (state, action) => {
    return updateObject(state, {
        nominationList: action.localStorageList
    });
}

const nominationCompleted = (state, action) => {
    return updateObject(state, {
        nominationsCompleted: true
    });
}

const nominationCleared = (state, action) => {
    return updateObject(state, {
        nominationsCompleted: false,
        nominationList: []
    });
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOMINATED_STARTED:
            return nominationStarted(state, action);
        case actionTypes.NOMINATED_SUCCESS:
            return nominationSuccess(state, action);
        case actionTypes.NOMINATED_FAILED:
            return nominationFailed(state, action);
        case actionTypes.NOMINATION_CANCELED:
            return nominationCanceled(state, action);
        case actionTypes.NOMINATIONS_STORED:
            return nominationStored(state, action);
        case actionTypes.NOMINATIONS_COMPLETED:
            return nominationCompleted(state, action);
        case actionTypes.NOMINATIONS_CLEARED:
            return nominationCleared(state, action);
        default: return state;
    };
};

export default reducer;