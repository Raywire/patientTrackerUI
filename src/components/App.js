import React, { Component } from 'react';
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Patients from './Patients'
import Appointments from './Appointments'
import About from './About'
import Contact from './Contact'
import Patient from './Patient'
import PatientAppointments from './PatientAppointments'
import Appointment from './Appointment'

class App extends Component {
    render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={ Home } />
          <Route exact path='/patients' component={ Patients }/>
          <Route exact path='/appointments' component={ Appointments }/>
          <Route path='/about' component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route exact path='/patients/:patient_id' component={ Patient } />
          <Route exact path='/patients/:patient_id/appointments' component={ PatientAppointments } />
          <Route path='/patients/:patient_id/appointments/:appointment_id' component={ Appointment } />
          <Route exact path='/appointments/:appointment_id' component={ Appointment } />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;