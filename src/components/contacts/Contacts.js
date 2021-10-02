import React, { Component } from 'react';
import Contact from './Contact';

import {Consumer} from '../../context';


class Contacts extends Component {
        deleteContact = (id) =>{
            this.setState(
                {
                    contacts: this.state.contacts.filter(contact=> contact.id !== id)
                }
            )
        }
    
    render() {
    
        return (
            <Consumer>
                {value=>{
                    const {contacts} = value;
                    return (
                        <>
                            <h1 className="display-4 mb-4"><span className="text-danger">Contact</span> List</h1>
                            {contacts.map(contact => <Contact key={contact.id} deleteContact={this.deleteContact.bind(this,contact.id)} {...contact} />)}
                        </>
                    )
                    
                }}
            </Consumer>
            
        )
    }
}

export default Contacts;
