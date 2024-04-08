import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import caduceus from './pictures/caduceus.png'
import doctor_icon from './pictures/doctor.png'
import folder_icon from './pictures/folder.png'
import useDropDown from "./UseDropDown"

const Patient_Record_View_D = () => {
   //another way of fetching data for patient
   const [patients, setPatients] = useState([]);
   useEffect(() =>{
     const getPatient= async ()=>{
       try{
           const res= await fetch('http://localhost:8800/patient_records');
           if(!res.ok){
               throw new Error('Network error')
           }
           const getData = await res.json();
           // debugging
           console.log(getData);
           setPatients(getData);
         } catch (error) {
           console.error("Couldn't fetch patients:", error);
         }
       };
       getPatient();
     }, []);
     // patient list  
     const patientDropDown = useDropDown();
     const[selectedPatient, setSelectedPatient] = useState([]);
     const[selectedPatientID, setSelectedPatientID] = useState(null);
     //allows only one patient id selection with their first name,last name, and symptoms, 
     // var assigned through patients array to return element if same match
     const handlePatientSelect =  async (patient_id) => {
       setSelectedPatientID (patient_id);
       const patient_selection = patients.find((patient) =>
                               patient.patient_id === patient_id);
       setSelectedPatient(patient_selection);
       
       }
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
          <img className = "dashboard-icon" src={doctor_icon}></img>
          <p className = "dashboard-header">Dashboard</p>
          <p><Link className= "dashboard-link" to="/dashboard-doctor/patient-records">Patient Records</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-doctor/appointments">Appointments</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-doctor/prescription">Prescription</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-doctor/modify-prescription">Modify Prescription</Link></p>
      </div>
      
      <div className= "gray-container">
            <div className = "first-header-container">
              <div className = "gray-header">
                Patient Records
              </div>
                  <img className = "icon-match-header" src={folder_icon}></img>
              </div>
              <p className= "gray-section-headers">Patient Information</p><br></br>
              <div className= "patient-info-bubbles">
              
              <div className = "bubbles1">
                <p className="bubbles-header">
                    Patient ID: 
                </p>
                <div className="patients-container">
                  <button type="button" className="select-patient" onClick={patientDropDown.toggleList}>
                    Select Patient
                    <img className="down-pic" src={down} alt="Down" />
                  </button>
                  <ul className="list-items" style={{ display: patientDropDown.isOpen ? 'block' : 'none' }}>
                    {patients.map((patient) => (
                      <li key={patient.patient_id} className="item" onClick={() => handlePatientSelect(patient.patient_id)}>
                        <span className="checkboxes">
                          {/* Show checkmark if patient_id is selected */}
                          <img className={`check-pic ${selectedPatientID === patient.patient_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                        </span>
                        <span className="item-text">{patient.patient_id}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Full Name: {selectedPatient && selectedPatient.first_name} {selectedPatient && selectedPatient.last_name}
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Phone Number:{selectedPatient && selectedPatient.phone_number}
                    </p>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        Date of Birth:{selectedPatient && selectedPatient.date_of_birth}
                    </p>
                  </div>
                  
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Street Address:{selectedPatient && selectedPatient.street_address}
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        State: {selectedPatient && selectedPatient.state_address}
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Zip Code:{selectedPatient && selectedPatient.zipcode_address}
                    </p>
                  </div>
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Patient ID:{selectedPatient && selectedPatient.patient_id}
                    </p>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        SSN:{selectedPatient && selectedPatient.SSN}
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Gender: {selectedPatient && selectedPatient.Gender}
                    </p>
                  </div>
                  <div className = "bubbles5">
                    <p className="bubbles-header">
                        Age:{selectedPatient && selectedPatient.age}
                    </p>
                  </div>
                 
              </div>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                        Severity Level: {selectedPatient && selectedPatient.severity_level}
                    </p>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        VIP:{selectedPatient && selectedPatient.isVIP}
                    </p>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        Medical History:{selectedPatient && selectedPatient.medical_history}
                    </p>
                  </div>
              </div>
              <div className= "patient-info-bubbles">
              <div className = "bubbles4">
                    <p className="bubbles-header">
                        Insurance ID:{selectedPatient && selectedPatient.insurance_id}
                    </p>
              </div>
              <div className = "bubbles4">
                    <p className="bubbles-header">
                        Insurance Name:{selectedPatient && selectedPatient.insurance_name}
                    </p>
              </div>
              <div className = "bubbles1">
                    <p className="bubbles-header">
                        Insured:{selectedPatient && selectedPatient.isInsured}
                    </p>
                  </div>
                  </div>
              <div className= "space-for-go-back">      
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
            </div>
        </div>
    </div>
 </div>
   
    );
  };


export default Patient_Record_View_D;