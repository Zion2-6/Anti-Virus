import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import folder_icon from './pictures/folder.png'
import useDropDown from "./UseDropDown"
import {useNavigate, useParams} from "react-router-dom"
import './Dashboards.css';
import logged_in_icon from './pictures/logged-in2.png'
const Patient_Record_View_P = () => {

   const{ user_id, patient_id } = useParams();
   console.log(useParams());
   console.log("user_id and patient_id from useParams:", user_id, patient_id);
   //another way of fetching data for patient
   const [patients, setPatients] = useState([]);
   useEffect(() =>{
     const getPatient= async ()=>{
       try{
           const res= await fetch(`http://localhost:8800/patient_record/${user_id}/${patient_id}`);
           if(!res.ok){
               throw new Error('Network error')
           }
           const getData = await res.json();
           // debugging
           console.log(getData);
           //one patient as array
           // still use maps to iterate through one element
           setPatients([getData]);
         } catch (error) {
           console.error("Couldn't fetch patient:", error);
         }
       };
       getPatient();
       //passed as a dependency
       // compares current value of dependency and the value on previous render
     }, [user_id, patient_id]);

     // patient list  
     const patientDropDown = useDropDown();
     const[selectedPatient, setSelectedPatient] = useState([]);
     const[selectedPatientID, setSelectedPatientID] = useState(null);
     
     //allows only one patient id selection with their first name,last name, and symptoms, 
     // var assigned through patients array to return element if same match
     //returns object after first match
     const handlePatientSelect = (patient_id) => {
       setSelectedPatientID (patient_id);
       const patient_selection = patients.find((patient) =>
                               patient.patient_id === patient_id);
       setSelectedPatient(patient_selection);
       
       }
       useEffect(() => {
        if (selectedPatient.first_name  && selectedPatient.last_name){
          document.title = `${ selectedPatient.first_name } ${selectedPatient.last_name}`;
        } else {
          document.title = "React App";
        }
       }, [selectedPatient])
    return (
      <div className ="home">
        <div className= "header">
        <div className="left-section">
          <img className="symbol" src={caduceus}/>
          <a href="/"><span className="website-name">IRL Anti-Virus</span></a>
        </div>
        <div className = "right-section">
          <img className="logged-in-symbol" src={logged_in_icon} alt="logged_in" />
        </div>
      </div>
      <div className = "parent-container">
      <div className = "dashboard-container">
      <img className = "dashboard-icon" src={patient_icon}></img>
          <p className = "dashboard-header">Dashboard</p>
          <p><Link className="dashboard-link" to={`/dashboard-patient/patient-record/${user_id}/${patient_id}`}>Patient Record</Link></p>
          <p><Link className="dashboard-link" to={`/dashboard-patient/book-appointment/${user_id}/${patient_id}`}>Book an Appointment</Link></p>
          <p><Link className="dashboard-link" to={`/dashboard-patient/prescription/${user_id}/${patient_id}`}>Prescription</Link></p>
          <p><Link className="dashboard-link" to={`/dashboard-patient/bill/${user_id}/${patient_id}`}>Bill</Link></p>
          <p><Link className="dashboard-link" to={`/dashboard-patient/payment/${user_id}/${patient_id}`}>Payment</Link></p>
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
                    {
                      Array.isArray(patients) &&patients.map((patient) => (
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
              <p><Link className="dashboard-link" to={`/dashboard-patient/${user_id}/${patient_id}`}>Go Back</Link></p>
            </div>
        </div>
    </div>
 </div>
   
    );
  };


export default Patient_Record_View_P;