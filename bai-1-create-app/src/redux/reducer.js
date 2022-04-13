import * as types from './actionTypes';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOGOUT_SUCCESS:{
            return {
                ...state,
                loading: false,
                currentUser: null,
            }
        }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.SET_USER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
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