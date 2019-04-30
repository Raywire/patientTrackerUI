import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Appointments extends Component {
    constructor() {
    super();
    this.state = {
      appointments: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
    componentDidMount(){
        let id = this.props.match.params.patient_id
        axios.get('https://serene-brook-70330.herokuapp.com/api/v1/patients/' + id + '/appointments/')
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
                                <p className="card-text">Attendant: { appointment.attendant }</p>
                                <p className="card-text">Date: { appointment.date_time }</p>
                                <Link to={ '/patients/' + appointment.patient + '/appointments/' + appointment.id } className="btn btn-link"><i className="fas fa-external-link-square-alt"></i></Link>
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