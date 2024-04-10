import React from "react";
import { Link } from "react-router-dom";
import caduceus from './pictures/caduceus.png';
import receptionist_icon from './pictures/receptionist.png'
import record_icon from './pictures/folder.png';
import prescription_icon from './pictures/prescription.png';
import bookapp_icon from './pictures/calendar.png';
import bill_icon from './pictures/payment.png';
import payment_icon from './pictures/payment-protection.png';
import './Home.css'; 
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
            <div className = "parent-container">
            <div className = "dashboard-container">
                <img className = "dashboard-icon" src={receptionist_icon}></img>
                <p className = "dashboard-header">Dashboard</p>
                <p><Link className= "dashboard-link" to="/dashboard-receptionist/patient-records">Patient Records</Link></p>
                <p><Link className= "dashboard-link" to="/dashboard-receptionist/appointments">Appointments</Link></p>
                <p><a className= "dashboard-link" href="#">Billing</a></p>
            </div>
      
                <div className="boxes-container">
                    <div className="box">
                        <Link to="/dashboard-receptionist/patient-records" className="box-content">
                            <img className="box-image" src={record_icon} alt="Patient Records" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Patient Records</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-receptionist/appointments" className="box-content">
                            <img className="box-image" src={bookapp_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Appointments</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/dashboard-receptionist" className="box-content">
                            <img className="box-image" src={prescription_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '60px', marginLeft: '30px' }}>Billing</div>
                        </Link>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Dashboard_P;
