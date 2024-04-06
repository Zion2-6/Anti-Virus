import React from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './About_Us.css'
import './Patient_Care_And_Treatment.css'
import caduceus from './pictures/caduceus.png'
import location_pic from "./pictures/location.png"
import facebook from "./pictures/facebook.png"
import twitter from "./pictures/twitter.png"
import linkedin from "./pictures/linked-in.png"
const Patient_Care_And_Treatment = () => {
    return (
      <div className ="home">
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
      
      <div className="bar-pages">
        <div className="treatment-section">
          <Link className = "shadowing" to="/patient-care-and-treatment">Patient Care & Treatment</Link>
        </div>
        <div className="visitor-section">
          <Link className = "shadowing" to="/patient-and-visitor-info">Patient & Visitor Info</Link>
        </div>
        <div className="appointment-section">
          <Link className = "shadowing" to="/book-appointment">Book an Appointment</Link>
        </div>
        <div className="about-us-section">
          <Link className = "shadowing" to="/about-us">About Us</Link>
        </div>
      </div>
      
      <div className="about-us-page">
        <span className= "about-us-header-text">Care & Treatment</span>
          <hr width="100%" color="black" />
          <span className= "treatment-header-text">Common Symptoms</span>
            <div className= "symptom-bullet-list">
              <ul>
                <li>Fever</li>
                <li>Diarrhea</li>
                <li>Fatigue</li>
                <li>Muscle aches</li>
                <li>Wheezing</li>
                <li>Depression</li>
                <li>Headache</li>
              </ul>
              <ul>
                <li>Cough</li>
                <li>Sore throat</li>
                <li>Nausea</li>
                <li>Vomiting</li>
                <li>Runny nose</li>
                <li>Stuffy nose</li>
                <li>Chest pain</li>
              </ul>
              <ul>
                <li>Rash</li>
                <li>Shortness of breath</li>
                <li>Joint pain</li>
                <li>Weight loss or gain</li>
                <li>Difficulty sleeping</li>
                <li>Memory problems or confusion</li>
              </ul>
              <ul>
                <li>Change in bowel movements</li>
                <li>Pelvic pain</li>
                <li>Dizziness</li>
                <li>Sudden numbness</li>
              </ul>
            </div>
          <hr width="100%" color="black" />
            <span className= "treatment-header-text">Healthcare Providers Specialization</span><br></br>
              <div className="healthcare-providers-container">
                <div className="healthcare-provider">General Medicine</div>
                <div className="healthcare-provider">Gastroenterology</div>
                <div className="healthcare-provider">Endocrinology</div>
                <div className="healthcare-provider">Urology</div>
                <div className="healthcare-provider">Hematology</div>
                <div className="healthcare-provider">Dermatology</div>
                <div className="healthcare-provider">Orthopedics</div>
                <div className="healthcare-provider">Ophtalmology</div>
                <div className="healthcare-provider1">Neurology</div>
                <div className="healthcare-provider2">Pediatrics</div>
                <div className="healthcare-provider3">Cardiology</div>
                <div className="healthcare-provider4">Obsterics and Gynecology</div>
              </div>
              <hr width="100%" color="black" />
            <span className= "treatment-header-text">Treatment</span><br></br>
              <p className="treatment-text">
                Treatment will be offered by healthcare providers after booking an appointment. 
                The process is necessary to ensure that your doctor will provide you optimal service at your availability. 
                Your health is our primary concern and we hope to help you through your health journey.
              </p> 
      </div>        
      <hr width="100%" color="black" />

      
      <div className="bottom-page">
        <div className="location-info"> 
          <p className="info">
            <span className="bold-title">Contact Us</span><br></br>
            <img className="location-pic" src={location_pic}/><br></br>
            Main Campus<br></br>
            75 Wood Lane Drive NE <br></br>
            Atlanta, GA 30354<br></br>
            (404)-404-4444
          </p>
        </div>
        <div className="vertical-line"></div>
        <div className="follow-info">
          <p>
            With top-notch facilities, cutting-edge technology, and nationally renowned doctors, we provide Atlanta with the greatest medical treatment.<br></br>
            Follow Us @
          </p>
          <div className="media">
            <img className="social-media" src={facebook}/>
            <img className="social-media" src={twitter}/>
            <img className="social-media" src={linkedin}/>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="links-info">
          <span className="bold-title">Helpful Links</span><br></br>
          <Link className= "shadowing" to="/login">Log-in</Link><br></br>
          <a href="#">Make an Appointment</a><br></br>
          <a href="#">Pay Your Bill</a><br></br>
          <a href="#">Medical Records</a>
        </div>
        <div className="vertical-line"></div>
        <div className="involved-info">
          <span className="bold-title">Get Involved</span><br></br>
          <a href="https://give.choa.org/site/Donation2?1480.donation=form1&df_id=1480&mfc_pref=T">Donate</a><br></br>
          <a href="https://volunteer.handsonatlanta.org/">Volunteer</a><br></br>
        </div>
      </div>
    </div>
    );
};

export default Patient_Care_And_Treatment;