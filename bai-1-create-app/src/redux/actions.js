import * as types from './actionTypes';
import {auth} from './../firebase';

const registerStart = () => ({
    type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
});

const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
});

export const registerInit = (email, password, displayName) => {
    return function (dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            dispatch(registerSuccess(user));
        }).catch(err => dispatch(registerError(err.message))); 
    }
}