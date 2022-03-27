import { GET_CONTACTS } from './../actions/types'

const initialState = {
    contacts: [
        {   id: 1,
            name: "test1",
            email: "test1@gamil.com",
            phone: "+84 333 5555"
        },
        {
            id: 2,
            name: "test2",
            email: "test2@gamil.com",
            phone: "+84 444 5555"
        },
        {
            id: 3,
            name: "test3",
            email: "test3@gamil.com",
            phone: "+84 555 5555"
        },
    ]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_CONTACTS: 
            return {
                ...state
            }
        default:
            return state;
    }
}