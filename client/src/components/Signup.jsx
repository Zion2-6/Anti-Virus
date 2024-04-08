import React, { useState } from 'react';
import './Signup.css'; // Make sure to adjust the path as necessary
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './Book_Appointment.css'
import useDropDown from "./UseDropDown";
import check from './pictures/check-2.png'
import down from './pictures/down.png'
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    pass: '',
    pass2: '',
    street: '',
    state: '',
    zip: '',
    phone: '',
    age: '',
    dob: '',
    userRole: '',
  });
  
  const userRoleOptions =[
    {user_role: 'Patient', value:'Patient'},
    {user_role: 'Doctor', value: 'Doctor'},
    {user_role: 'Receptionist', value: 'Receptionist'}
  ];
  //setting user roles
  const[selectedUserRole, setSelectedUserRole] = useState('');
  
  const handleUserRoleSelect = (value) =>{
    setSelectedUserRole(value);
    //updating the form data with selected role
    setFormData(prevFormData => ({
      ...prevFormData,
      userRole: value, 
    }));
  }
  const userRoleDropDown = useDropDown();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
    navigate('/login');
  };

  return (
    <div className="account-container2">
      <div className="account-header">Create an Account</div>
      <form onSubmit={handleSubmit}>
        <div className="account-info">
          <div>
            <label htmlFor="firstname">First Name:</label><br />
            <input className="first-name-box" type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="lastname">Last Name:</label><br />
            <input className="last-name-box" type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">E-mail Address:</label><br />
            <input className="email-box" type="text" name="email" value={formData.email} onChange={handleChange} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="example@.com" required />
          </div>
          <div>
            <label htmlFor="username">Username:</label><br />
            <input className="users-box" type="text" name="username" value={formData.username} onChange={handleChange} pattern="^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$" required />
          </div>
          <div>
            <label htmlFor="pass">Password:</label><br />
            <input className="pass-box" type="password" name="pass" value={formData.pass} onChange={handleChange} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}" required />
            <p className="pass-info">Use at least 7 characters, including both numbers and letters. Use uppercase and lowercase letters. No special characters are allowed (@,!,#,$,% etc.).</p>
          </div>
          <div>
            <label htmlFor="pass2">Confirm Password:</label><br />
            <input className="pass2-box" type="password" name="pass2" value={formData.pass2} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="street">Street Address:</label><br />
            <input className="street-box" type="text" name="street" value={formData.street} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="state">State:</label><br />
            <input className="state-box" type="text" name="state" value={formData.state} onChange={handleChange} pattern="[A-Za-z]{2}" required />
          </div>
          <div>
            <label htmlFor="zip">Zip Code:</label><br />
            <input className="zipcode-box" type="text" name="zip" value={formData.zip} onChange={handleChange} pattern="[0-9]{5}" required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label><br />
            <input className="phone-box" type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" placeholder="XXX-XXX-XXXX" required />
          </div>
          <div>
            <label htmlFor="age">Age:</label><br />
            <input className="age-box" type="number" name="age" value={formData.age} onChange={handleChange} min="0" max="120" required />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label><br />
            <input className="dob-box" type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
        </div>
        <div className="user-container">
        <div className ="bubbles3">
            <p className="bubbles-header">
            </p>
            <button type="button" className="select-user-role" onClick={userRoleDropDown.toggleList}>
                Select User Role
              <img className="down-pic" src={down} alt="Down" />
              </button>
              <ul className="list-items" style={{ display: userRoleDropDown.isOpen ? 'block' : 'none' }}>
                  {userRoleOptions.map((role_option) => (
                    <li key={role_option.value} className="item" onClick={() => handleUserRoleSelect(role_option.value)}>
                       <span className="checkboxes">
                          {/* only shows checks for selected user role*/}
                           <img className={`check-pic ${selectedUserRole === role_option.value ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                        </span>
                          {/* only user role is shown to user */}
                        <span className="item-text">{role_option.user_role}</span>
                      </li>
                ))}
                </ul>
        </div>
        </div>
        <div className="submission">
          <button className="create-acct-button">Create Account</button>
          <p className="cancel-link">
            <Link className= "shadowing" to="/">Cancel</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
