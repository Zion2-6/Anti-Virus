import React, { useState } from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import calendar_icon from './pictures/calendar.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import CalendarComponent from './CalendarComponent'
import format from "date-fns/format";


const Prescription_Patient = () => {
  
    //checks if form is submitted default is false
    const[formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = async (e) =>{
      e.preventDefault();
      //location not needed for data submission
      //deubgger
      if(formSubmitted) {
        console.log("Form already submitted. Preventing multiple submissions.");
        return;
    }
      setFormSubmitted(true);
  }  
    {/*  // only one event
      const event = calendarEvents[0];
      // formatted separately so they're not in an array
      const formatStart = format(event.start, 'yyyy-MM-dd HH:mm:ss');
      const formatEnd =format (event.start, 'yyyy-MM-dd HH:mm:ss');
      const formData = {
        symptoms: selectedSymptoms,
        specializations: selectedSpecialization,
        hospital: selectedHospitalObj?.hospital_id,
        room: selectedRoom,
        gender: selectedGender,
        room: selectedRoom,
        ssn,
        medicalHistory,
        insuranceName, 
        phoneNumber,
        streetAddress,
        state,
        zipCode,
        startEvent: formatStart,
        endEvent: formatEnd
      };
      console.log("Information to be submitted...");
      console.log("Symptom List: ", selectedSymptoms);
      console.log("Hospital: ", selectedHospitalName);
      console.log("Room: ", selectedRoom);
      console.log("SSN: ", ssn);
      console.log("Medical History: ", medicalHistory);
      console.log("Insurance Name: ", insuranceName);
      console.log("Street Address: ", streetAddress);
      console.log("Phone Number: ", phoneNumber);
      console.log("State: ", state);
      console.log("Zip Code: ", zipCode);
      
      console.log(formData);

    }
  */}


    return (
      <div className ="home">
        <form onSubmit={handleSubmit}>
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
          <p><a className= "dashboard-link" href="#">Patient Record</a></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/book-appointment">Book an Appointment</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/book-appointment">Prescription</Link></p>
          <p><a className= "dashboard-link" href="#">Bill</a></p>
          <p><a className= "dashboard-link" href="#">Payment</a></p>
      </div>
      
      <div className= "blue-container">
            <div className = "first-header-container">
              <div className = "blue-header">
                Book appointment
              </div>
                  <img className = "icon-match-header" src={calendar_icon}></img>
              </div>
              <p className= "blue-section-headers">Patient Information</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Email:
                    </p>
                    <input className="email-bubble" type="text" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                    <span className= "gender-text"> Gender: </span>
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        SSN:
                    </p>
                    <input className="SSN-bubble" type="text" name="SSN" pattern="^\d{3}\d{2}\d{4}$" required />
                  </div>
              </div>

              <p className= "blue-section-headers">Medical Concerns</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                      Symptoms:
                    </p>
                      </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Medical History:
                    </p>
                    <input className="medical-history-bubble" type="text" name="history" pattern="^[a-zA-Z0-9._\s]{1,255}$" required/>
                  </div>
                
              </div>

              <p className= "blue-section-headers">Insurance Information</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Insurance Name:
                    </p>
                    <input className="insurance-bubble" type="text" name="insurance" pattern="^[A-Za-z &\-]+$" required />
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Phone Number:
                    </p>
                    <input className="phone-bubble" type="text" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}$" required />
                  </div>
                  </div>
                  <div className= "patient-info-bubbles">
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Street Address:
                    </p>
                    <input className="street-bubble" type="text" name="street" required/>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        State:
                    </p>
                    <input className="state-bubble" type="text" name="state" pattern="pattern=[A-Za-z]{2}$" required/>
                  </div>
                  <div className = "bubbles5">
                    <p className="bubbles-header">
                        ZIP Code:
                    </p>
                    <input className="zip-bubble" type="text" name="zip" pattern="[0-9]{5}$" required/>
                  </div>
              </div>
              
                          
              <button className= "schedule-appt-button" onClick={(e) => handleSubmit(e)}>Schedule Appointment</button>
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
        </div>
    </div>
    </form>
 </div>   
    );
};

export default Prescription_Patient;