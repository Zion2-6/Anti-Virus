import React from "react";
import { Link, useParams } from "react-router-dom";
import caduceus from './pictures/caduceus.png';
import receptionist_icon from './pictures/receptionist.png'
import record_icon from './pictures/folder.png';
import prescription_icon from './pictures/prescription.png';
import bookapp_icon from './pictures/calendar.png';
import logged_in_icon from './pictures/logged-in2.png'
import './Home.css'; // Make sure to import the updated CSS file
<<<<<<< HEAD
=======
import bill_icon from './pictures/payment.png';
import payment_icon from './pictures/payment-protection.png';
import './Home.css'; 
>>>>>>> c6af90a31e2cf0d2e89d806d3257d2845a5872db
import './Book_Appointment.css';
import './Dashboards.css';

const Dashboard_R = () => {
    const { user_id, receptionist_id } = useParams();
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
            <div className = "parent-container">
            <div className = "dashboard-container">
                <img className = "dashboard-icon" src={receptionist_icon}></img>
                <p className = "dashboard-header">Dashboard</p>
                <p><Link className="dashboard-link" to={`/dashboard-receptionist/patient-records/${user_id}/${receptionist_id}`}>Patient Records</Link></p>
                <p><Link className="dashboard-link" to={`/dashboard-receptionist/appointments/${user_id}/${receptionist_id}`}>Appointments</Link></p>
                <p><Link className="dashboard-link" to={`/dashboard-receptionist/billing/${user_id}/${receptionist_id}`}>Billing</Link></p>
            </div>
      
                <div className="boxes-container">
                    <div className="box">
                        <Link to={`/dashboard-receptionist/patient-records/${user_id}/${receptionist_id}`} className="box-content">
                            <img className="box-image" src={record_icon} alt="Patient Records" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Patient Records</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-receptionist/appointments/${user_id}/${receptionist_id}`} className="box-content">
                            <img className="box-image" src={bookapp_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Appointments</div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/dashboard-receptionist/billing/${user_id}/${receptionist_id}`} className="box-content">
                            <img className="box-image" src={prescription_icon} alt="Box 1 Image" />
                            <div style={{  fontSize: '20px', marginTop: '50px', marginLeft: '30px' }}>Billing</div>
                        </Link>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Dashboard_R;
