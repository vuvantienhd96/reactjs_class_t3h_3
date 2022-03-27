import React from 'react';

export default function ContactDetail(props) {

    const id = props.match.params.id;
    const contact = { name: '', email: '', phone: '' }
    return (

        <div>
            <h1 className='display-4'>Detail Contact</h1>
            <p className='text-secondary'>{contact.name}</p>
            <p className='text-secondary'>{contact.email}</p>
            <p className='text-secondary'>{contact.phone}</p>
        </div>
    )
}
