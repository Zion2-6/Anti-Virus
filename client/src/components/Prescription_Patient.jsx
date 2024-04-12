import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import prescription from './pictures/prescription.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import { useParams } from "react-router-dom";
import './Dashboards.css';
import logged_in_icon from './pictures/logged-in2.png'


const Prescription_Patient = () => {
    const{ user_id, patient_id } = useParams();
    console.log(useParams());
    console.log("user_id and patient_id from useParams:", user_id, patient_id);
    // setting selections
    const[drug, setDrug] = useState('');
    const[dosage, setDosage] = useState('');
    const[fee, setFee] = useState('');
    const[additionalNotes, setNotes] = useState('');
    
    
    //another way of fetching data for appointment
  const [patients, setPatients] = useState([]);
  useEffect(() =>{
    const getPatient= async ()=>{
      try{
          const res= await fetch('http://localhost:8800/patient_prescription_info_fetch');
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
    //makes sure that symptoms is an empty array
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
    
    
      const formData = {
        selectedPatientID,
        drug,
        dosage,
        fee,
        additionalNotes,
      }
      console.log("Information to be submitted...");
      console.log("Patient ID: ", selectedPatientID);
      console.log("First Name: ", selectedPatient.patient_first_name);
      console.log("Last Name: ", selectedPatient.patient_last_name);
      console.log("Drug: ", drug);
      console.log("Dosage: ", dosage);
      console.log("Fee: ", fee);
      console.log("Additional Notes: ", additionalNotes);
      console.log(formData);
     // navigate('/dashboard-doctor');

    };

    return (
      <div className ="home">
        <form onSubmit={handleSubmit}>
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
              <div className = "gray-header">Prescription
              </div>
                  <img className = "icon-match-header" src={prescription}></img>
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
                  <div className ="bubbles2">
                    <p className="bubbles-header">
                        First Name: 
                    </p>
                    {selectedPatient && selectedPatient.patient_first_name}
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Last Name:
                    </p>
                    {selectedPatient && selectedPatient.patient_last_name}
                  </div>
                  
              </div>
              <p className= "gray-section-headers">Prescription Drugs</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                      Name of Drug:
                    </p>
                    {selectedPatient && selectedPatient.medicine_name}
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                      Dosage:
                    </p>
                    {selectedPatient && selectedPatient.dosage_desc}
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                      Fee:
                    </p>
                    {selectedPatient && selectedPatient.prescription_fee}
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Additional Notes:
                    </p>
                    {selectedPatient && selectedPatient.additional_notes}
                  </div>
                </div>
              <div className= "space-for-go-back"> 
              <p><Link className="dashboard-link" to={`/dashboard-patient/${user_id}/${patient_id}`}>Go Back</Link></p>
              </div> 
        </div>
    </div>
    </form>
 </div>  
    );
  };


export default Prescription_Patient;