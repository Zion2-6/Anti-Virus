import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useDropDown from "./UseDropDown"
import check from './pictures/check-2.png'
import down from './pictures/down.png'


const Billing_P = () => {

  const navigate = useNavigate();
  const { user_id, patient_id } = useParams();
  console.log(useParams());
  console.log("user_id and patient_id from useParams:", user_id, patient_id);
  const [values, setValues] = useState({
    patientId: '',
    fullName: '',
  });

  const [errors, setErrors] = useState({});
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const getPatient = async () => {
      try {
        const res = await fetch('http://localhost:8800/patient_records');
        if (!res.ok) {
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
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [selectedPatientID, setSelectedPatientID] = useState(null);
  //allows only one patient id selection with their first name,last name, and symptoms, 
  // var assigned through patients array to return element if same match
  const handlePatientSelect = async (patient_id) => {
    setSelectedPatientID(patient_id);
    const patient_selection = patients.find((patient) =>
      patient.patient_id === patient_id);
    setSelectedPatient(patient_selection);

  }
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic can be added here if needed
    console.log('Patient ID:', values.patientId);
    console.log('Full Name:', values.fullName);
    // Redirect logic after submission
    navigate('/login');
  };

  return (
    <div className="account-container2">
      <div className="account-header">Billing for Patient</div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-header">Patient Information</div>
        <div className="account-info">
          <div className="bubbles1">
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
          <div>
            <label htmlFor="fullName">Full Name:</label><br />
            <input className="full-name-box" type="text" name="fullName" onChange={handleInput} required />
          </div>
        </div>
        <div className="form-header">Summary</div>
        <div className="account-info">
          <div>
            <p style={{ fontSize: '18px' }}>Appointment Fee: $100</p>
            <p style={{ fontSize: '18px' }}>Prescription Fee: $50</p>
            <p style={{ fontSize: '18px' }}>Insurance Copay: $20</p>
          </div>
        </div>
        <div className="form-header">Total Fee: </div>
        <div className="account-info">
          <div>
            <p style={{ fontSize: '18px' }}>Bill Date: </p>
            <p style={{ fontSize: '18px' }}>Bill Due: $50</p>
          </div>
        </div>
        <div className="submission">
          <button className="create-acct-button">Proceed to Payment</button>
          <p className="cancel-link">
            <p><Link className="dashboard-link" to={`/dashboard-patient/${user_id}/${patient_id}`}>Cancel</Link></p>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Billing_P;
