import React from "react";
import { Link } from "react-router-dom";
import caduceus from './pictures/caduceus.png';
import patient_icon from './pictures/patient.png';
import record_icon from './pictures/folder.png';
import prescription_icon from './pictures/prescription.png';
import bookapp_icon from './pictures/calendar.png';
import bill_icon from './pictures/payment.png';
import payment_icon from './pictures/payment-protection.png';
import './Home.css'; // Make sure to import the updated CSS file
import './Book_Appointment.css';

const Dashboard_P = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="left-section">
                    <img className="symbol" src={caduceus} alt="Caduceus" />
                    <a href="/"><span className="website-name">IRL Anti-Virus</span></a>
                </div>
                <div className="right-section">
                    <Link className="shadowing" to="/login">Log-in</Link><span className="stick-shadow"> |</span>
                    <Link className="shadowing" to="/signup">Create an Account</Link>
                </div>
            </div>
            <div className="parent-container">
                <div className="dashboard-container">
                    <img className="dashboard-icon" src={patient_icon} alt="Dashboard Icon" />
                    <p className="dashboard-header">Dashboard</p>
                    <p><Link className="dashboard-link" to="/dashboard-patient/patient-record">Patient Record</Link></p>
                    <p><Link className="dashboard-link" to="/dashboard-patient/book-appointment">Book an Appointment</Link></p>
                    <p><Link className="dashboard-link" to="/dashboard-patient/prescription">Prescription</Link></p>
                    <p><a className="dashboard-link" href="#">Bill</a></p>
                    <p><a className="dashboard-link" href="#">Payment</a></p>
                </div>
                <div className="boxes-container">
                    <div className="box">
                        <Link to="/dashboard-patient/patient-record" className="box-content">
                            <img className="box-image" src={record_icon} alt="Patient Records" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Patient Records</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-patient/book-appointment/:user_id/:patient_id" className="box-content">
                            <img className="box-image" src={bookapp_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Book Appointment</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-patient/prescription/" className="box-content">
                            <img className="box-image" src={prescription_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Prescription</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-patient/" className="box-content">
                            <img className="box-image" src={bill_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Bill</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-patient/" className="box-content">
                            <img className="box-image" src={payment_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Payment</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard_P;
