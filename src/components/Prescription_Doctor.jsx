import React, { useState } from "react"
import {Link , useNavigate} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import './Prescription_Doctor.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import calendar_icon from './pictures/calendar.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import prescription from './pictures/prescription.png'
import doctor_icon from './pictures/doctor.png'


const Prescription_Doctor = () => {
  const mockPatients = [
    {
      patient_id: 1,
      first_name: 'Lele',
      last_name: 'Ponce',
      symptoms: ['Fever', 'Cough', 'Sore throat']
    },
    {
      patient_id: 2,
      first_name: 'Billy',
      last_name: 'Bob',
      symptoms: ['Headache', 'Muscle aches', 'Fatigue']
    }
  ]
    //const navigate = useNavigate();
    // setting selections
    const[selectedPatientObj ,setSelectedPatientObj] = useState(null);
    const[selectedFirstName, setSelectedFirstName] = useState('');
    const[selectedLastName, setSelectedLastName] = useState('');
    const[selectedSymptoms, setSelectedSymptoms] =useState([]);
    const[drug, setDrug] = useState('');
    const[dosage, setDosage] = useState('');
    const[fee, setFee] = useState('');
    const[additionalNotes, setNotes] = useState('');
    
    // patient list  
    const patientDropDown = useDropDown();

    //allows only one patient id selection with their first name,last name, and symptoms, 
    // var assigned through mockpatients array to return element if same match
    const handlePatientSelect = (patient_id) => {
      const chosenPatient = mockPatients.find((patient_obj) =>
                              patient_obj.patient_id === patient_id);
      console.log(chosenPatient);
      if(chosenPatient){
        setSelectedPatientObj(chosenPatient);
        setSelectedSymptoms(chosenPatient.symptoms);
        setSelectedFirstName(chosenPatient.first_name);
        setSelectedLastName(chosenPatient.last_name);
        
        console.log(chosenPatient.symptoms);
      } else {
        console.error("Patient with ID ${patient_id} not found");
        //reset values
        setSelectedPatientObj(null);
        setSelectedFirstName('');
        setSelectedLastName('');
      }

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
        patient: selectedPatientObj?.patient_id,
        drug,
        dosage,
        fee,
        additionalNotes,
      }
      console.log("Information to be submitted...");
      
      console.log("First Name: ", selectedFirstName);
      console.log("Last Name: ", selectedLastName);
      console.log("Drug: ", drug);
      console.log("Dosage: ", dosage);
      console.log("Fee: ", fee);
      console.log("Additional Notes: ", additionalNotes);
      console.log(formData);
     // navigate('/dashboard-doctor');

    };

  //allows multiple symptom selections
  const handleSymptomSelect =(symptom_id) =>{

    setSelectedSymptoms((currSelectedSymptoms) => {
      if(currSelectedSymptoms.includes(symptom_id)){
      return currSelectedSymptoms.filter(id => id !== symptom_id);
    } else {
      return[...currSelectedSymptoms, symptom_id];
    }

  });
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
          <p><a className= "dashboard-link" href="#">Patient Record</a></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/book-appointment">Book an Appointment</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-doctor/prescription">Prescription</Link></p>
          <p><a className= "dashboard-link" href="#">Bill</a></p>
          <p><a className= "dashboard-link" href="#">Payment</a></p>
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
                        {mockPatients.map((patient) => (
                          <li key={patient.patient_id} className="item" onClick={() => handlePatientSelect(patient.patient_id)}>
                            <span className="checkboxes">
                              {/* Show checkmark if patient_id is selected */}
                              <img className={`check-pic ${selectedPatientObj && selectedPatientObj.patient_id === patient.patient_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
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
                    {selectedFirstName}
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Last Name:
                    </p>
                    {selectedLastName}
                  </div>
                  
              </div>
              <div className= "patient-info-bubbles"> 
              
              <div className = "bubbles1">
                <p className="bubbles-header">
                  Symptoms:
                </p>
                {selectedSymptoms.join(', ')}
                </div>
                </div>
                {/*
                <div className="symptoms-container">
                  <button type="button" className="select-symptom" onClick={symptomDropDown.toggleList}>
                      Selected Symptoms
                    <img className="down-pic" src={down} alt="Down" />
    </button> */}
                  {/*Mapping symptom ids to names */}
                 {/*  <ul className="list-items" style={{ display: symptomDropDown.isOpen ? 'block' : 'none' }}>
                      {
                        mockSymptoms.map((symptom) => (
                          <li key={symptom.symptom_id} className="item" onClick={() => handleSymptomSelect(symptom.symptom_id)}>
                            <span className="checkboxes">
                              <img className={`check-pic ${selectedSymptoms.includes(symptom.symptom_id) ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10"/>
                            </span>
                             <span className="item-text">{symptom.symptom_name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>  
                  </div>
                  </div>
                      */}
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