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

const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})

export const registerInit = (email, password, displayName) => {
    return function (dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
            user.updateProfile({
                displayName
            })
            localStorage.setItem('myCat', user._delegate.accessToken);
            dispatch(registerSuccess(user));
        }).catch(err => dispatch(registerError(err.message))); 
    }
}

export const loginInit = (email, password) => {
    return function (dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(loginSuccess(user));
            localStorage.setItem('myCat', user._delegate.accessToken);
        }).catch(err => dispatch(loginError(err.message))); 
    }
}

export const logoutInit = () => {
    return function (dispatch){
        dispatch(logoutStart());
        auth.signOut().then(() => {
            dispatch(logoutSuccess());
            localStorage.removeItem('myCat');
        }).catch(err => dispatch(logoutError(err.message))); 
    }
}