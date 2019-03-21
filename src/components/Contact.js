import React, { Component } from 'react'

class Contact extends Component {
    render(){
        return (
        <div className="container">
            <h4 className="text-center">Contact</h4>
            <div className="container">
            <form>
            <div className="row">
                <div className="col">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" id="firstname" placeholder="First name"/>
                </div>
                <div className="col">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" id="lastname" placeholder="Last name"/>
                </div>
            </div>                
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea type="password" className="form-control" id="message" placeholder="Message"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>                
            </div>          
        </div>
    )
    }
}

export default Contact;