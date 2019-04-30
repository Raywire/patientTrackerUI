import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Patients extends Component {
    constructor() {
    super();
    this.state = {
      patients: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
    componentDidMount(){
        axios.get('https://serene-brook-70330.herokuapp.com/api/v1/patients/')
            .then(response => {
                this.setState({
                    patients: response.data.slice(0, 10)
                })
            })
    }
    render(){
        const { patients } = this.state;
        const patientList = patients.length ? (
            patients.map( patient => {
                return (
                    <div className="col-sm-6 mb-3" key={patient.id}>
                        <div className="card border-primary">
                            <div className="card-body">
                                <h5 className="card-title">{ patient.first_name + ' ' + patient.middle_name + ' ' + patient.last_name }</h5>
                                <p className="card-text">{ patient.phone }</p>
                                <Link to={ '/patients/' + patient.id } className="btn btn-link float-right"><i className="fas fa-external-link-square-alt"></i></Link>
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
            <h4 className="text-center">Patients</h4>
            <div className="row">{ patientList }</div>
        </div>
    )        
    }
}

export default Patients;