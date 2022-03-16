import React from 'react';
import { Consumer } from '../../context';

export default function ContactDetail(props) {

    const id = props.match.params.id;
    return (
        <Consumer>
            {value => {
                const { contacts } = value;
                const contact =  contacts.filter(el => String(el.id) === id)[0];
                return <div>
                    <h1 className='display-4'>Detail Contact</h1>
                    <p className='text-secondary'>{contact.name}</p>
                    <p className='text-secondary'>{contact.email}</p>
                    <p className='text-secondary'>{contact.phone}</p>
                </div>

            }}
        </Consumer>

    )
}
