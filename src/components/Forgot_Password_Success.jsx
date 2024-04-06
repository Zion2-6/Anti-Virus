import React, {useState} from 'react';
import './Forgot_password.css'; 
const Forgot_Password_Success = () => {
  
  return(
    <div className= "pass-reset-container">
      <span className ="pass-header">Password Reset</span>
      <p className = "pass-reset-info">
      We have sent you an e-mail. Please contact us if you do not receive it in a few minutes.
      </p>
        <p className="cancel-link">
          <a href="/">Return to Home</a>
        </p>
      
    </div>
  )
}
export default Forgot_Password_Success;