import React from "react";
import { Link } from "react-router-dom";
import caduceus from './pictures/caduceus.png';
import patient_icon from './pictures/patient.png';
import record_icon from './pictures/folder.png';
import prescription_icon from './pictures/prescription.png';
import bookapp_icon from './pictures/calendar.png';
import bill_icon from './pictures/payment.png';
import payment_icon from './pictures/payment-protection.png';
import logged_in_icon from './pictures/logged-in2.png'
import './Home.css'; // Make sure to import the updated CSS file
import './Book_Appointment.css';
import './Dashboards.css';
import {  useParams } from "react-router-dom";



const Dashboard_P = () => {
    const{ user_id, patient_id } = useParams();
    console.log(useParams());
    console.log("user_id and patient_id from useParams:", user_id, patient_id);
    return (

       
        <div className="home">
            <div className="header">
                <div className="left-section">
                    <img className="symbol" src={caduceus} alt="Caduceus" />
                    <a href="/"><span className="website-name">IRL Anti-Virus</span></a>
                </div>
                <div className="right-section">
                <img className="logged-in-symbol" src={logged_in_icon} alt="logged_in" />
                </div>
            </div>
            <div className="parent-container">
                <div className="dashboard-container">
                    <img className="dashboard-icon" src={patient_icon} alt="Dashboard Icon" />
                    <p className="dashboard-header">Dashboard</p>
                    <p><Link className="dashboard-link" to={`/dashboard-patient/patient-record/${user_id}/${patient_id}`}>Patient Record</Link></p>
                    <p><Link className="dashboard-link" to={`/dashboard-patient/book-appointment/${user_id}/${patient_id}`}>Book an Appointment</Link></p>
                    <p><Link className="dashboard-link" to={`/dashboard-patient/prescription/${user_id}/${patient_id}`}>Prescription</Link></p>
                    <p><Link className="dashboard-link" to={`/dashboard-patient/bill/${user_id}/${patient_id}`}>Bill</Link></p>
                    <p><a className="dashboard-link" href="#">Payment</a></p>
                </div>
                <div className="boxes-container">
                    <div className="box">
                        <Link to={`/dashboard-patient/patient-record/${user_id}/${patient_id}`} className="box-content">
                            <img className="box-image" src={record_icon} alt="Patient Records" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Patient Record</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-patient/book-appointment/${user_id}/${patient_id}`} className="box-content">
                            <img className="box-image" src={bookapp_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Book Appointment</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-patient/prescription/${user_id}/${patient_id}`} className="box-content">
                            <img className="box-image" src={prescription_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Prescription</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-patient/bill/${user_id}/${patient_id}`} className="box-content">
                            <img className="box-image" src={bill_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Bill</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-patient/${user_id}/${patient_id}`} className="box-content">
                            <img className="box-image" src={payment_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Payment</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard_P;
