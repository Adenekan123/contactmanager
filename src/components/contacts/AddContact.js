import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';


class AddContact extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        errors:{}

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value} );


    onSubmit = async (dispatch,e) =>{
        e.preventDefault();
        const {name,email,phone} = this.state;

        //Check for errors
        if(name === ''){
            this.setState({errors:{name: 'Name is required'}});
            return;

        }
        if(email === ''){
            this.setState({errors:{email: 'Email is required'}});
            return;
        }
        if(phone === ''){
            this.setState({errors:{phone: 'Email is required'}});
            return;
        }

        const newContacts = {
            name,
            email,
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users',newContacts);
        dispatch({type: 'ADD_CONTACTS',payload: res.data});

        

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    }

    render() {
        const {name, email, phone,errors} = this.state;
        return(
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return (
                        <div className="card m-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                    <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                    > 
                                    </TextInputGroup>

                                    <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                    > 

                                    </TextInputGroup>
                                    <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                    > 
                                    </TextInputGroup>

                                    
                                  
                                    <input type="submit" value="Addcontact" className="btn btn-light py-2 btn-block" />
                                </form>
                            </div>
                            
                        </div>
                    )
                }}
            </Consumer>
        )
      
    }
}

export default AddContact;
