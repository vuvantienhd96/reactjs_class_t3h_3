import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Contact.css';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { urlApi } from '../../helper/helper';

export default class Contact extends Component {

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

    onDeleteClick = async (id, dispatch) => {
        // axios.delete(`${urlApi}${id}`)
        // .then(res => dispatch({type: 'DELETE_CONTACT', payload: id})).catch(err => console.log(err));
         
        // async await
        try {
            await axios.delete(`${urlApi}${id}`);
            dispatch({type: 'DELETE_CONTACT', payload: id});
        } catch (error) {
            console.log("errr", error);
        }
        

        
    }

    render() {
        const { name, phone, email, id } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch, contacts } = value;
                    return (
                        <div className='card card-body mb-3'>
                            <p><Link to={`/contact/edit/${id}`}>Go to edit &gt;</Link></p>
                            <h4>{name}
                                <i className='fas fa-sort-down' style={{ cursor: 'pointer' }} onClick={this.onShowClick} />
                                <Link to={`/contact/${id}`}><i className="fas fa-user" style={{ cursor: 'pointer', float: 'right' }}></i></Link>
                                <p></p>
                                <i className='fas fa-times'
                                    style={{ cursor: 'pointer', float: 'right' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                            </h4>
                            {this.state.onShow && <ul className='list-group'>
                                <li className='list-group-item'>Email: {email}</li>
                                <li className='list-group-item'>Phone: {phone}</li>
                            </ul>}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}