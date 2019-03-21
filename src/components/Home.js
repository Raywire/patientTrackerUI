import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card border-primary mt-3 mb-3">
                        <div className="card-header">Patients</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">Number</h5>
                            <p className="card-text">100</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card border-primary mt-3 mb-3">
                        <div className="card-header">Appointments</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">Number</h5>
                            <p className="card-text">100</p>
                        </div>
                    </div>
                </div>               
            </div>  
        </div>
    )
}

export default Home;