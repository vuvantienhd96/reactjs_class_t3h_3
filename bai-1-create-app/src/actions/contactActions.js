import { ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS } from "./types";

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    }
}

export const deleteContacts = (id) => {
    return {
        type: DELETE_CONTACTS,
        payload: id,
    }
}

export const addContacts = (contact) => {
    return {
        type: ADD_CONTACTS,
        payload: contact,
    }
}