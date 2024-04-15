import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useDropDown from "./UseDropDown"
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import moment from 'moment';

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
  const [appointmentFee, setAppointmentFee] = useState(0);
  const [prescriptionFee, setPrescriptionFee] = useState(0);
  const [insuranceCopay, setInsuranceCopay] = useState(0);
  const [billDate, setBillDate] = useState('');
  const [billDue, setBillDue] = useState('');

  useEffect(() => {
    const getBillingInfo = async () => {
      try {
        const res = await fetch(`http://localhost:8800/billing_info/${selectedPatientID}`);
        if (!res.ok) {
          throw new Error('Network error')
        }
        const data = await res.json();
        setAppointmentFee(data.appointment_fee);
        setPrescriptionFee(data.prescription_fee);
        setInsuranceCopay(data.insurance_copay);

        const currentDate = moment().format('MM-DD-YYYY');
        setBillDate(currentDate);
        const dueDate = moment().add(5, 'days').format('MM-DD-YYYY');
        setBillDue(dueDate);
      } catch (error) {
        console.error("Couldn't fetch billing info:", error);
      }
    };
    if (selectedPatientID) {
      getBillingInfo();
    }
  }, [selectedPatientID]);

  const handlePatientSelect = async (patient_id) => {
    setSelectedPatientID(patient_id);
    const patient_selection = patients.find((patient) =>
      patient.patient_id === patient_id);
    setSelectedPatient(patient_selection);
  }

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const totalFee = appointmentFee + prescriptionFee - insuranceCopay;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient ID:', values.patientId);
    console.log('Full Name:', values.fullName);
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
                  patient.patient_id === user_id && (
                    <li key={patient.patient_id} className="item" onClick={() => handlePatientSelect(patient.patient_id)}>
                      <span className="checkboxes">
                        <img className={`check-pic ${selectedPatientID === patient.patient_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                      </span>
                      <span className="item-text">{patient.patient_id}</span>
                    </li>
                  )
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
            <p style={{ fontSize: '18px' }}>Appointment Fee: ${appointmentFee}</p>
            <p style={{ fontSize: '18px' }}>Prescription Fee: ${prescriptionFee}</p>
            <p style={{ fontSize: '18px' }}>Insurance Copay: ${insuranceCopay}</p>
          </div>
        </div>
        <div className="form-header">Total Fee: ${totalFee}</div>
        <div className="account-info">
          <div>
            <p style={{ fontSize: '18px' }}>Bill Date: {billDate}</p>
            <p style={{ fontSize: '18px' }}>Bill Due: {billDue}</p>
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
