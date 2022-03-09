import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
    }
    // controlled from
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        console.log('$state', this.state);
    }

    render() {
        const { name, email, phone } = this.state;
        return (
            <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form>
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
                        <input type='submit' onClick={this.onSubmit} value='Add Contact' className='btn btn-light btn-block mt-3'></input>
                    </form>
                </div>
            </div>
        )
    }
}
