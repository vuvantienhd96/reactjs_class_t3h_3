import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Contact.css';

export default class Contact extends Component {
    
    constructor(props){
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

    onShowClickHandle(name,phone, e){
       
        this.setState({
            onShow: !this.state.onShow
        })
    }

    onDeleteClick = (id) => {
        // callback
        this.props.deleteClickHandler(id);
    }

    // clickButtonTang = () =>{
    //     this.setState({
    //         ...this.state,
    //         number: this.state.number+=1
    //     })
    // }
    // clickButtonGiam = () =>{
    //     this.setState({
    //         ...this.state,
    //         number: this.state.number-=1
    //     })
    // }


    render() {
        const { name, phone, email, id } = this.props.contact;
        console.log('render ======', this.state.number);
        return (
            <div className='card card-body mb-3'>
                <h4>{name} 
                    <i className='fas fa-sort-down' style={{cursor: 'pointer'}} onClick={this.onShowClick} />
                    <i className='fas fa-times' 
                        style={{cursor: 'pointer', float: 'right'}} 
                        onClick={this.onDeleteClick.bind(this, id)} 
                    />
                </h4>
                {this.state.onShow && <ul className='list-group'>
                    <li className='list-group-item'>Email: {email}</li>
                    <li className='list-group-item'>Phone: {phone}</li>
                </ul>}
                {/* <h2>{this.state.number}</h2>
                <button onClick={this.clickButtonTang}>tang</button>
                <button onClick={this.clickButtonGiam}>giam</button> */}
            </div>
        )
    }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
}