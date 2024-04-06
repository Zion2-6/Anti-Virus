import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import './Forgot_password.css'; 
const Forgot_Password = () => {

  const[email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    navigate('/forgot-password-success');
  };
  return(
    <form onSubmit={handleSubmit}>
      <div className="forgot-password-header">Forgot your password?
        <div className= "email-block"><span className= "email-text">Email</span>
        <input className="email-box" type="text" name="email" value={email} onChange={handleChange} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder="example@.com" required />
        </div>
        <button className="reset-button">Reset Password</button>
        <p className="cancel-link">
          <Link className= "shadowing" to="/login">Cancel</Link>
        </p>
      </div>
    </form>
  );
  };

export default Forgot_Password;