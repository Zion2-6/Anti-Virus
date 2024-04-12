import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate, useParams} from 'react-router-dom';

const Billing_P = () => {

  const navigate = useNavigate();
  const{ user_id, patient_id } = useParams();
  console.log(useParams());
  console.log("user_id and patient_id from useParams:", user_id, patient_id);
  const [values, setValues] = useState({
    patientId: '',
    fullName: '',
  });

  const [errors, setErrors] = useState({});

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
          <div>
            <label htmlFor="patientId">Patient ID:</label><br />
            <input className="patient-id-box" type="text" name="patientId" onChange={handleInput} required />
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
