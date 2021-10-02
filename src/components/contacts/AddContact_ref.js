import React, { Component } from 'react'

class AddContact extends Component {
   constructor(props){
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
   }

    onSubmit = (e) =>{
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };

        console.log(contact);
    }

    static defaultProps = {
        name: 'Fred Smith',
        email: 'fred@gmail.com',
        phone: '777-777-7777'
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value} );
    render() {
        const {name, email, phone} = this.props;
        return (
            <div className="card m-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                             defaultValue={name}
                             ref={this.nameInput}
                             name="name"
                             type="text"
                             className="form-control form-control-lg"
                             placeholder="Enter Name..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                             defaultValue={email}
                             ref={this.emailInput}
                             name="email"
                             type="email" 
                             className="form-control form-control-lg" 
                             placeholder="Enter Email..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input 
                             defaultValue = {phone}
                             ref={this.phoneInput}
                             name="phone" 
                             type="text" 
                             className="form-control form-control-lg" 
                             placeholder="Enter Phone..." />
                        </div>
                        <input type="submit" value="Addcontact" className="btn btn-light py-2 btn-block" />
                    </form>
                </div>
                
            </div>
        )
    }
}

export default AddContact;
