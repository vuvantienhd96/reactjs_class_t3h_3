import React, { Component } from 'react'
import { Consumer } from '../../context';
import { v4 as uuidv4 } from 'uuid';

export default class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }
    // controlled from
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuidv4(),
            name,
            phone,
            email,
        }
        // console.log('newContact', newContact);
        dispatch({type: 'ADD_CONTACT', payload: newContact})

    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Name</label>
                                        <input
                                            value={name}
                                            name='name'
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='Enter namehere...'
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Email</label>
                                        <input
                                            value={email}
                                            name='email'
                                            type='email'
                                            className='form-control form-control-lg'
                                            placeholder='Enter email here...'
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='phone'>Phone</label>
                                        <input
                                            value={phone}
                                            name='phone'
                                            type='text'
                                            className='form-control form-control-lg'
                                            placeholder='Enter phone here...'
                                            onChange={this.onChange}
                                        />
                                    </div>
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
