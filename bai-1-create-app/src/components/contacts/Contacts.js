import React, { Component } from 'react'
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types';

class Contacts extends Component {


    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        this.props.getContacts();
    }

    render() {

        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1 className='display-4 mb-2'>
                    <span className='text-danger'>Contact </span>List
                </h1>
                {contacts.map(contact =>
                    <Contact
                        contact={contact}
                        key={contact.id}
                    />
                )}
            </React.Fragment>
        )
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
}

const mapStatetoProps = (state) => ({
    contacts: state.contact.contacts
});

const mapDispatchToProps = (dispatch) => ({
    getContacts: () => dispatch({ type: GET_CONTACTS})
});

export default connect(mapStatetoProps, mapDispatchToProps)(Contacts)
