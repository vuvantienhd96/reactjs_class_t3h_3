import React, { Component } from 'react';
import axios from 'axios';
import { urlApi } from './helper/helper';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    // promise

    // componentDidMount(){
    //     axios.get(urlApi)
    //     .then(res => this.setState({ contacts: res.data })).catch((err) => console.log(err));
    // }

    // async await
    async componentDidMount(){
        const res = await axios.get(urlApi);
        this.setState({ contacts: res.data });
     }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
