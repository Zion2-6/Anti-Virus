import React, { useState } from 'react';
import './Signup.css'; // Make sure to adjust the path as necessary
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './Book_Appointment.css'
import useDropDown from "./UseDropDown";
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import Validation from './SignupValidation';

const Signup = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    password2: '',
    street: '',
    state: '',
    zip: '',
    phone: '',
    age: '',
    dob: '',
    userRole: '',
  });
  
  const [errors, setErrors] = useState({})
  const handleInput= (e) => {
    setValues(prev =>({...prev, [e.target.name]: e.target.value}))
  }
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
    setValues(prevFormData => ({
      ...prevFormData,
      userRole: value, 
    }));
  }
  const userRoleDropDown = useDropDown();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = Validation(values);
    setErrors(err);
    console.log("Email: ", values.email);
    console.log("First Name: ", values.firstname);
    console.log("Last Name: ", values.lastname);
    console.log("Username: ", values.username);
    console.log("Password: ", values.password);
    console.log("Confirm Password: ", values.password2);
    console.log("Street: ", values.street);
    console.log("State: ", values.state);
    console.log("Zipcode: ", values.zip);
    console.log("Age: ", values.age);
    console.log("Date of Birth: ", values.dob);
    console.log("User role: ", values.userRole);
    fetch('http://localhost:8800/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // redirect to login
        navigate('/login');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle error, show error message to the user, etc.
      });
    };

  return (
    <div className="account-container2">
      <div className="account-header">Create an Account</div>
      <form action="" onSubmit={handleSubmit}>
        <div className="account-info">
          <div>
            <label htmlFor="firstname">First Name:</label><br />
            <input className="first-name-box" type="firstname" name="firstname" onChange={handleInput} required />
          </div>
          {errors.firstname && <span className='text-danger'>{errors.firstname}</span>}
          <div>
            <label htmlFor="lastname">Last Name:</label><br />
            <input className="last-name-box" type="lastname" name="lastname" onChange={handleInput} required />
          </div>
          {errors.lastname && <span className='text-danger'>{errors.lastname}</span>}
          <div>
            <label htmlFor="email">E-mail Address:</label><br />
            <input className="email-box" type="email" name="email"  onChange={handleInput} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="example@.com" required />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="username">Username:</label><br />
            <input className="users-box" type="username" name="username" onChange={handleInput} pattern="^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$" required />
            {errors.username && <span className='text-danger'>{errors.username}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label><br />
            <input className="pass-box" type="password" name="password" onChange={handleInput} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}" required />
            <p className="pass-info">Use at least 7 characters, including both numbers and letters. Use uppercase and lowercase letters. No special characters are allowed (@,!,#,$,% etc.).</p>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="password2">Confirm Password:</label><br />
            <input className="pass2-box" type="password" name="password2" onChange={handleInput} required />
            {errors.password2 && <span className='text-danger'>{errors.password2}</span>}
          </div>
          <div>
            <label htmlFor="street">Street Address:</label><br />
            <input className="street-box" type="street" name="street" onChange={handleInput} required />
            {errors.street && <span className='text-danger'>{errors.street}</span>}
          </div>
          <div>
            <label htmlFor="state">State:</label><br />
            <input className="state-box" type="state" name="state" onChange={handleInput} pattern="[A-Za-z]{2}" required />
            {errors.state && <span className='text-danger'>{errors.state}</span>}
          </div>
          <div>
            <label htmlFor="zip">Zip Code:</label><br />
            <input className="zipcode-box" type="zip" name="zip" onChange={handleInput} pattern="[0-9]{5}" required />
            {errors.zip && <span className='text-danger'>{errors.zip}</span>}
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label><br />
            <input className="phone-box" type="tel" name="phone" onChange={handleInput} pattern="[0-9]{10}" placeholder="XXX-XXX-XXXX" required />
            {errors.phone && <span className='text-danger'>{errors.phone}</span>}
          </div>
          <div>
            <label htmlFor="age">Age:</label><br />
            <input className="age-box" type="number" name="age"  onChange={handleInput} min="0" max="120" required />
            {errors.age && <span className='text-danger'>{errors.age}</span>}
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label><br />
            <input className="dob-box" type="date" name="dob" onChange={handleInput} required />
            {errors.dob && <span className='text-danger'>{errors.dob}</span>}
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
