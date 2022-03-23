import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';
import { urlApi } from '../../helper/helper';


export default class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    }
    // controlled from
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        // check for errors
        if(name === ''){
            this.setState({errors: {name: 'Name is required' }});
            return;
        }
        if(email === ''){
            this.setState({errors: {email: 'Email is required' }});
            return;
        }
        if(phone === ''){
            this.setState({errors: {phone: 'Phone is required' }});
            return;
        }
       
        const newContact = {
            // id: uuidv4(),
            name,
            phone,
            email,
        }

        // axios.post(urlApi, newContact).then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}))

        // async await
        try {
            const res = await axios.post(urlApi, newContact);
            dispatch({type: 'ADD_CONTACT', payload: res.data});
        } catch (error) {
            console.log(error);
        }
        
        // ctrl + P : search file 
        // ctrl + shift+ f: search key word
        
        // clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });

        // go back to home
        this.props.history.push('/');

    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        value={name}
                                        name='name'
                                        placeholder='Enter namehere...'
                                        onChange={this.onChange}
                                        label='name'
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        value={email}
                                        name='email'
                                        type='email'
                                        placeholder='Enter email here...'
                                        onChange={this.onChange}
                                        label='email'
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        value={phone}
                                        name='phone'
                                        placeholder='Enter phone here...'
                                        onChange={this.onChange}
                                        label='phone'
                                        error={errors.phone}
                                    />
                                    <input type='submit' value='Add Contact' className='btn btn-light btn-block mt-3'></input>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}
