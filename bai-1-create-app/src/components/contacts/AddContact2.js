import React, { Component } from 'react'

export default class AddContactUnControlled extends Component {

    constructor(props){
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    // Uncontrolled from
   
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log('contact', contact);
    }

    static defaultProps = {
        name: 'FriendA',
        phone: '555-444-333',
        email: 'Simson@mail.com.vn',
    }

    render() {
        const { name, phone, email } = this.props;
        console.log('rednder lan n ');
        return (
            <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input 
                                name='name'
                                type='text' 
                                className='form-control form-control-lg'
                                placeholder='Enter namehere...'
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input 
                                defaultValue={email}
                                name='email'
                                type='email' 
                                className='form-control form-control-lg'
                                placeholder='Enter email here...'
                                ref={this.emailInput}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input 
                                defaultValue={phone}
                                name='phone' 
                                type='text'
                                className='form-control form-control-lg'
                                placeholder='Enter phone here...' 
                                ref={this.phoneInput}
                            />
                        </div>
                        <input type='submit' onClick={this.onSubmit} value='Add Contact' className='btn btn-light btn-block mt-3'></input>
                    </form>
                </div>
            </div>
        )
    }
}
