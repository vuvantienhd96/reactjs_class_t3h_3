import React, { Component } from 'react'
import Contact from './Contact';

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        // initial state
        this.state = {
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
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact =>
                    <Contact 
                        contact={contact}
                        key={contact.id}
                    />
                )}
            </div>
        )
    }
}
