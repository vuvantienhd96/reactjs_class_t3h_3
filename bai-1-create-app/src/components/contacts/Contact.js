import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Contact.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContacts } from '../../actions/contactActions';
 class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onShow: false,
            number: 0,
        }

        this.onShowClickHandle = this.onShowClickHandle.bind(this);
    }

    onShowClick = (e) => {
        this.setState({
            onShow: !this.state.onShow
        })
    }

    onShowClickHandle(name, phone, e) {

        this.setState({
            onShow: !this.state.onShow
        })
    }

    onDeleteClick = id => {
       this.props.deleteContacts(id);
    }

    render() {
        const { name, phone, email, id } = this.props.contact;
        return (

            <div className='card card-body mb-3'>
                <h4>{name}
                    <i className='fas fa-sort-down' style={{ cursor: 'pointer' }} onClick={this.onShowClick} />
                    <Link to={`/contact/${id}`}><i className="fas fa-user" style={{ cursor: 'pointer', float: 'right' }}></i></Link>
                    <p></p>
                    <i className='fas fa-times'
                        style={{ cursor: 'pointer', float: 'right' }}
                        onClick={this.onDeleteClick.bind(this, id)}
                    />
                </h4>
                {this.state.onShow && <ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                </ul>}

            </div>
        )
    }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContacts: PropTypes.func.isRequired,
}

export default connect(null, { deleteContacts })(Contact);