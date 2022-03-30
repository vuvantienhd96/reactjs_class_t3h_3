import { api } from "../helper/api";
import { ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS, GET_CONTACTS_DETAIL } from "./types";
import axios from 'axios';

export const getContacts = () => async dispatch =>  {
    try {
        const res = await axios.get(api);
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        });
    } catch (error) {
        console.log('err', error);
    }
}

export const deleteContacts = (id) => async dispatch => {
    try {
        await axios.delete(api + id);
        dispatch({
            type: DELETE_CONTACTS,
            payload: id
        });
    } catch (error) {
        console.log('err', error);
    }
}

export const addContacts = (contact) => async dispatch => {
    try {
        let res = await axios.post(api, contact);
        dispatch({
            type: ADD_CONTACTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
    
}

export const ContactDetailEdit = (id) => async dispatch => {
    try {
        const res = await axios.get(api + id);
        dispatch({
            type: GET_CONTACTS_DETAIL,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
    
}