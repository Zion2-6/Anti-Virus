import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import userIcon from './user_icon.png'; // Import the user icon image
import keyIcon from './key_pwd.png';
import './Login.css'; // Import your CSS file
import Validation from './LoginValidation';
import axios from 'axios';

const Login = () => {
  const[values, setValues] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({})
  const handleInput= (e) => {
    setValues(prev =>({...prev, [e.target.name]: e.target.value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = Validation(values);
    if (!err.email && !err.password) {
      try {
        const { data } = await axios.post('http://localhost:8800/login', values);
        console.log("Login successful with data:", data);
        // Use data to navigate
        if (data.user_role === 'Patient') {
          navigate(`/dashboard-patient/book-appointment/${data.user_id}/${data.patient_id}`);
        } else if (data.user_role === 'Doctor') {
          navigate(`/dashboard-doctor/appointments/${data.user_id}/${data.doctor_id}`);
        } else if (data.user_role === 'Receptionist') {
          navigate(`/dashboard-receptionist/appointments/${data.user_id}/${data.receptionist_id}`);
        }
      } catch (error) {
        console.error("Login error:", error.response || error);
      }
    }
  };
  
  return (
    <div className="account-container">
      <form action ="" onSubmit={handleSubmit}>
          <div className="login-header">
            Login
          </div>
          <div className="form-container">
            <p className="username-section">
              <input className="email-box2" type="email" placeholder="Enter Email"
               required  name='email' onChange= {handleInput}/>
              <img className="user-pic" src={userIcon} alt="User Icon" />
            </p>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
            <p className="password-section">
              <input className="password-box" type="password" placeholder="Enter Password" 
                 required name='password' onChange= {handleInput} />
              <img className="key-pic" src={keyIcon} alt="Key Icon" />
            </p>
            {errors.password && <span className='text-danger'>{errors.password}</span>}

          </div>
          <div className="form-subcontainer">
            <p className="forgot-password">
              <Link className= "shadowing" to ="/forgot-password">Forgot password?</Link>
            </p>
          </div>
          <div className="submission">
            <button type="submit" className="login-button">Login</button>
            <p className="register">
              Not a registered user? <Link className= "shadowing" to ="/signup">Register here!</Link>
            </p>
          </div>        
      </form>
      </div>  
  );
};

export default Login;
