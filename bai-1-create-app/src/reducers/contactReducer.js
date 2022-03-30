import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS, GET_CONTACTS_DETAIL } from './../actions/types'

const initialState = {
    contacts: [],
    detailContact: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case DELETE_CONTACTS:
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload
                )
            }
        case ADD_CONTACTS:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case GET_CONTACTS_DETAIL:
            return {
                ...state,
                detailContact: action.payload
            }
        default:
            return state;
    }
}