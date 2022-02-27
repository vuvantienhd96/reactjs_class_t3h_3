import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Contact.css';

export default class Contact extends Component {
  render() {
    
    const {name, phone, email} = this.props.contact;
    
    return (
        <div className='card card-body mb-3'>
            <h4>{name}</h4>
            <ul className='list-group'>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
            </ul>
        </div>
    )
  }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}