import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Appointments extends Component {
    constructor() {
    super();
    this.state = {
      appointments: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
    componentDidMount(){
        axios.get('https://serene-brook-70330.herokuapp.com/api/v1/appointments/')
            .then(response => {
                this.setState({
                    appointments: response.data.slice(0, 10)
                })
            })
    }
    render(){
        const { appointments } = this.state;
        const appointmentList = appointments.length ? (
            appointments.map( appointment => {
                return (
                    <div className="col-sm-6 mb-3" key={appointment.id}>
                        <div className="card border-primary">
                            <div className="card-body">
                                <h5 className="card-title">{ appointment.title }</h5>
                                <p className="card-text">{ appointment.attendant }</p>
                                <p className="card-text">{ moment(appointment.date_time).format('MMMM Do YYYY, h:mm a') }</p>
                                <Link to={ '/appointments/' + appointment.id } className="btn btn-link float-right"><i className="fas fa-external-link-square-alt"></i></Link>
                            </div>
                        </div>
                    </div>                                     
                )
            })
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
        <div className="container">
            <h4 className="text-center">Appointments</h4>           
            <div className="row">{ appointmentList }</div>
        </div>
    )        
    }
}

export default Appointments;