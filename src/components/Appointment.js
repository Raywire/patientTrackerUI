import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Appointment extends Component {
    constructor() {
    super();
    this.state = {
      appointment: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }    

    componentDidMount(){
        let id = this.props.match.params.appointment_id
        axios.get('https://serene-brook-70330.herokuapp.com/api/v1/appointments/' + id)
            .then(response => {
                this.setState({
                    appointment: response.data
                })
            })
    }
    render() {
        const appointment = this.state.appointment ? (
            <div className="container">
                <div className="container mb-3">
                    <Link to={ '/appointments/' + this.state.appointment.id }><button type="button" className="btn btn-outline-primary  mr-3"><i className="far fa-edit"></i></button></Link>
                    <button type="button" className="btn btn-outline-danger"><i className="far fa-trash-alt"></i></button>
                </div>
            <div className="card border-info mb-3">
                <div className="card-header">Appointment Number: { this.state.appointment.id } <span className="float-right"> Patient Number: { this.state.appointment.patient}</span></div>
                <div className="card-body text-info">
                    <h4 className="card-title text-center">{ this.state.appointment.title }</h4>
                    <h5 className="card-title">Attendant: { this.state.appointment.attendant }</h5>
                    <p className="card-text">Description: { this.state.appointment.description }</p>                  
                </div>
                <div className="card-footer text-muted">
                    { moment(this.state.appointment.date_time).format('MMMM Do YYYY, h:mm a') }
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
                { appointment }
            </div>
        )
    }
}

export default Appointment