import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';
import axios from 'axios';
import { urlApi } from '../../helper/helper';


export default class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    }
    // controlled from
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    async componentDidMount(){
        const { id } = this.props.match.params;
        // call api here and setState for userItem
        try {
            const res = await axios.get(urlApi + id);
            console.log('$res', res);
            const contact = res.data;
            this.setState({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
            })
        } catch (error) {
            console.log(error);
        }
    }

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

        // call api put here
        const upContact = {
            name, 
            email,
            phone,
        }
        const { id } = this.props.match.params;
        try {
            const res = await axios.put(urlApi + id, upContact);
            console.log('$res put api', res);
            dispatch({type: 'UPDATE_CONTACT', payload: res.data});
        } catch (error) {
            
        }
       
        // // clear state
        // this.setState({
        //     name: '',
        //     email: '',
        //     phone: '',
        //     errors: {},
        // });

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
                            <div className='card-header'>Edit Contact</div>
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
                                    <input type='submit' value='Edit Contact' className='btn btn-light btn-block mt-3'></input>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}
