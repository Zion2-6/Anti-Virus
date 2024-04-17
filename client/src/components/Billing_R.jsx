import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useDropDown from "./UseDropDown"
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import moment from 'moment';

const Billing_R = () => {
  const navigate = useNavigate();
  const { user_id, receptionist_id } = useParams();
  const [values, setValues] = useState({
    patientId: '',
    fullName: '',
  });

  const [errors, setErrors] = useState({});
  const [patients, setPatients] = useState([]);

  const patientDropDown = useDropDown();
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [selectedPatientID, setSelectedPatientID] = useState(null);
  const [appointmentFee, setAppointmentFee] = useState(100);
  const [prescriptionFee, setPrescriptionFee] = useState(50);
  const [insuranceCopay, setInsuranceCopay] = useState(20);
  const [billDate, setBillDate] = useState('');
  const [billDue, setBillDue] = useState('');

  useEffect(() => {
    const getPatient = async () => {
      try {
        const res = await fetch('http://localhost:8800/billing_infos');
        if (!res.ok) {
          throw new Error('Network error')
        }
        const getData = await res.json();
        console.log(getData);
        setPatients(getData);
        // appointmentFee
        const appointmentFee = getData.length > 0 ? getData[0].appointment_fee : 0;
        setAppointmentFee(appointmentFee);
        // prescriptionFee
        const prescriptionFee = getData.length > 0 ? getData[0].prescription_fee : 0;
        setPrescriptionFee(prescriptionFee);
        // insuranceCopay
        const insuranceCopay = getData.length > 0 ? getData[0].co_pay : 0;
        setInsuranceCopay(insuranceCopay);
      } catch (error) {
        console.error("Couldn't fetch patients:", error);
      }
    };
    getPatient();
  }, []);

  useEffect(() => {
    const currentDate = moment().format('MM-DD-YYYY');
    setBillDate(currentDate);
    const dueDate = moment().add(5, 'days').format('MM-DD-YYYY');
    setBillDue(dueDate);
  }, []);

  const handlePatientSelect = async (patient_id) => {
    setSelectedPatientID(patient_id);
    const patient_selection = patients.find((patient) =>
      patient.patient_id === patient_id);
    setSelectedPatient(patient_selection);
    setAppointmentFee(patient_selection.appointment_fee);
    setPrescriptionFee(patient_selection.prescription_fee);
    setInsuranceCopay(patient_selection.co_pay);
  }

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const totalFee = Math.max(appointmentFee + prescriptionFee - insuranceCopay, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Patient ID:', values.patientId);
    console.log('Full Name:', values.fullName);
    navigate('/billing-patient');
  };

  return (
    <div className="account-container2">
      <div className="account-header">Billing for Receptionist</div>
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
                      <img className={`check-pic ${selectedPatientID === patient.patient_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                    </span>
                    <span className="item-text">{patient.patient_id}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bubbles2">
            <p className="bubbles-header">
              First Name: {selectedPatient && selectedPatient.first_name}
              &nbsp; &nbsp; &nbsp; &nbsp; Last Name: {selectedPatient && selectedPatient.last_name}
            </p>
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
          <button className="create-acct-button">Confirm</button>
          <p className="cancel-link">
            <Link className="dashboard-link" to={`/dashboard-receptionist/${user_id}/${receptionist_id}`}>Cancel</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Billing_R;
