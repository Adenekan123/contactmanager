import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Link} from 'react-router-dom';

import {Consumer} from '../../context';


class Contact extends Component {

    state= {
        showContactDetails: false
    };
    
    onShowClick = () =>{
        this.setState(
            {
                showContactDetails: !this.state.showContactDetails
            }
        )
    }

    onDeleteClick =  async (id,dispatch) =>{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:'DELETE_CONTACTS',payload:id});
    }
    
    render() {
        const {id,name,email,phone} = this.props;
        const {showContactDetails} = this.state;
        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3">
                            <h5>
                                {name}
                                <i
                                onClick={this.onShowClick }
                                className="fas fa-sort-down"></i> 

                                <i
                                onClick={this.onDeleteClick.bind(this,id,dispatch)}
                                className="fa fa-times d-inline text-danger font-weight-bold float-right"></i>

                                <Link to={`contact/edit/${id}`}>
                                    <i
                                     style={{
                                        cursor:'pointer',
                                        float:'right',
                                        color:'black',
                                        marginRight:'1rem'
                                     }}
                                     className="fas fa-pencil-alt"></i>
                                </Link>

                            </h5>
                            {!showContactDetails ? null: 
                            <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul> }

                        </div>
                    );
                }}
            </Consumer>

            
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default Contact;
