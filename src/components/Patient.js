import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Patient extends Component {
    constructor() {
    super();
    this.state = {
      patient: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }    

    componentDidMount(){
        let id = this.props.match.params.patient_id
        axios.get('https://serene-brook-70330.herokuapp.com/api/v1/patients/' + id)
            .then(response => {
                this.setState({
                    patient: response.data
                })
            })
    }
    render() {
        const patient = this.state.patient ? (
            <div className="container">
                <div className="container mb-3">
                    <Link to={ '/patients/' + this.state.patient.id + '/appointments/' }><button type="button" className="btn btn-outline-primary  mr-3">Appointments</button></Link>
                    <Link to={ '/patients/' + this.state.patient.id + '/appointments/' }><button type="button" className="btn btn-outline-primary  mr-3"><i className="far fa-edit"></i></button></Link>
                    <button type="button" className="btn btn-outline-danger"><i className="far fa-trash-alt"></i></button>
                </div>
            <div className="card border-info mb-3">
                <div className="card-header">Patient Number: { this.state.patient.id }</div>
                <div className="card-body text-info">
                    <h5 className="card-title">{ this.state.patient.first_name + ' ' + this.state.patient.middle_name + ' ' + this.state.patient.last_name }</h5>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Date of Birth</th>
                                <td>{ this.state.patient.date_of_birth }</td>
                            </tr>                            
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{ this.state.patient.gender }</td>
                            </tr>
                            <tr>
                                <th scope="row">ID Number</th>
                                <td>{ this.state.patient.id_number }</td>
                            </tr>
                            <tr>
                                <th scope="row">County</th>
                                <td>{ this.state.patient.county }</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{ this.state.patient.email }</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>{ this.state.patient.phone }</td>
                            </tr>                                                       
                        </tbody>
                        </table>                    
                </div>
            </div>
            </div>

        ) : (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="container mt-3">
                { patient }
            </div>
        )
    }
}

export default Patient