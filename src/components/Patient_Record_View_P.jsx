import React, { useState } from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import prescription from './pictures/prescription.png'
import folder_icon from './pictures/folder.png'
const Patient_Record_View_P = () => {
  
    return (
      <div className ="home">
        <div className= "header">
        <div className="left-section">
          <img className="symbol" src={caduceus}/>
          <a href="/"><span className="website-name">IRL Anti-Virus</span></a>
        </div>
        <div className = "right-section">
          <Link className= "shadowing" to="/login">Log-in</Link><span className= "stick-shadow"> |</span>
          <Link className= "shadowing" to="/signup">Create an Account</Link>
        </div>
      </div>
      <div className = "parent-container">
      <div className = "dashboard-container">
          <img className = "dashboard-icon" src={patient_icon}></img>
          <p className = "dashboard-header">Dashboard</p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/patient-record">Patient Record</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/book-appointment">Book an Appointment</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/prescription">Prescription</Link></p>
          <p><a className= "dashboard-link" href="#">Bill</a></p>
          <p><a className= "dashboard-link" href="#">Payment</a></p>
      </div>
      
      <div className= "gray-container">
            <div className = "first-header-container">
              <div className = "gray-header">
                Patient Record
              </div>
                  <img className = "icon-match-header" src={folder_icon}></img>
              </div>
              <p className= "gray-section-headers">Patient Information</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        First Name:
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        Last Name:
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Phone Number:
                    </p>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        Date of Birth:
                    </p>
                  </div>
                  <div className = "bubbles5">
                    <p className="bubbles-header">
                        Age:
                    </p>
                  </div>
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Street Address:
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        State:
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Zip Code:
                    </p>
                  </div>
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Patient ID:
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        SSN:
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Gender:
                    </p>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        Insurance ID:
                    </p>
                  </div>
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Insured:
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        Severity Level:
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        VIP:
                    </p>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        Medical History:
                    </p>
                  </div>
              </div>
                      
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
        </div>
    </div>
 </div>
   
    );
  };


export default Patient_Record_View_P;