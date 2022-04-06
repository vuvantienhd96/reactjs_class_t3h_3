import * as types from './actionTypes';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default useReducer;