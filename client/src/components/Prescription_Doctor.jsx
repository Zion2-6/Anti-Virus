import React, { useState, useEffect } from "react"
import {Link , useNavigate} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import prescription from './pictures/prescription.png'
import doctor_icon from './pictures/doctor.png'


const Prescription_Doctor = () => {
  
    //const navigate = useNavigate();
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
          const res= await fetch('http://localhost:8800/patient_prescription_info');
          if(!res.ok){
              throw new Error('Network error')
          }
          const getData= await res.json();
          // maps through the 
          const parseDataObjects = getData.map(patient =>({

            ...patient,
            //parsing the issue 
            symptoms: JSON.parse(patient.symptoms)
          }))
          setPatients(parseDataObjects);
          console.log(parseDataObjects);
      } catch(error){
          console.error("Couldn't fetch patient: ", error);
      }
      };
      getPatient();
    }, []);
    // patient list  
    const patientDropDown = useDropDown();
    //makes sure that symptoms is an empty array
    const[selectedPatient, setSelectedPatient] = useState({ symptoms: [] });
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
                Prescription
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
              <div className= "patient-info-bubbles"> 
              
              <div className = "bubbles1">
                <p className="bubbles-header">
                  Symptoms:
                </p>
                {selectedPatient.symptoms.map((symptom, attr)=>(
                  <div key={attr}>{symptom.symptom_name}</div>
                ))}
                </div>
                </div>
              <p className= "gray-section-headers">Prescription Drugs</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                      Name of Drug:
                    </p>
                    <input className="drug-bubble" type="text" name="drug" pattern="^[A-Za-z &\-]+$" required 
                    onChange={(e) =>setDrug(e.target.value)}/>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                      Dosage:
                    </p>
                    <input className="dosage-bubble" type="text" name="dosage"  pattern="\d+\s?mg" required 
                      onChange={(e) =>setDosage(e.target.value)}/>
                  </div>
                  <div className = "bubbles2">
                    <p className="bubbles-header">
                      Fee:
                    </p>
                    <input className="fee-bubble" type="text" name="dosage-fee" pattern="^(([1-9](\d*|\d{0,2}(,\d{3})*))|0)(\.\d{1,2})?$" required 
                      onChange={(e) =>setFee(e.target.value)}/>
                  </div>
                </div>
                  <div className= "patient-info-bubbles">
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Additional Notes:
                    </p>
                    <input className="additional-notes-bubble" type="text" name="history" pattern="^[a-zA-Z0-9._\s]{1,255}$" required
                    onChange={(e) =>setNotes(e.target.value)}/>
                  </div>
                
              </div>

             
              
                          
              <button className= "prescrip-confirm-button" onClick={(e) => handleSubmit(e)}>Confirm</button>
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
        </div>
    </div>
    </form>
 </div>  
    );
  };

export default Prescription_Doctor;