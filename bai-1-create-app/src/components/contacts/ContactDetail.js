import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ContactDetailEdit } from '../../actions/contactActions';

class ContactDetail extends Component {
    constructor(props){
        super(props);
    }
    id = this.props.match.params.id;
    
    componentDidMount(){
       this.props.ContactDetailEdit(this.id);
    }
   
    render() {
        console.log(this.props.detailContact);
        return (

            <div>
                <h1 className='display-4'>Detail Contact</h1>
                {/* <p className='text-secondary'>{contact.name}</p>
                <p className='text-secondary'>{contact.email}</p>
                <p className='text-secondary'>{contact.phone}</p> */}
            </div>
        )
    }
}

const mapStatetoProps = (state) => ({
    detailContact: state.contact.detailContact
});
export default connect(mapStatetoProps, { ContactDetailEdit })(ContactDetail);
