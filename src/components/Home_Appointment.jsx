import React from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './About_Us.css'
import './Patient_Care_And_Treatment.css'
import './Patient_And_Visitor.css'
import './Home_Appointment.css'
import caduceus from './pictures/caduceus.png'
import location_pic from "./pictures/location.png"
import facebook from "./pictures/facebook.png"
import twitter from "./pictures/twitter.png"
import linkedin from "./pictures/linked-in.png"
import computer from "./pictures/computer.png"
import appointment from "./pictures/appointment.png"
import phone_call from "./pictures/call-center.png"


const Home_Appointment = () => {
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
        <span className= "about-us-header-text">Book An Appointment</span>
          <hr width="100%" color="black" />
            <div className ="appt-check">
            <span className= "treatment-header-text">How to Make an Appointment </span>
            </div>
            <div className="icons-for-appointment">
              <img className="icons-appointment" src={phone_call} alt="phone_call"/>
              <img className="icons-appointment" src={appointment} alt="appointment"/>
              <img className="icons-appointment" src={computer} alt="computer"/>
            </div>
            <p className= "before-arrival-text"> 
              <span className = "before-arrival-header">Before You Arrive</span><br></br>
              Thank you for choosing IRL Anti-Virus as the healthcare provider. 
              There are a few ways to make your next appointment.
              You can use one of the links below to schedule an in-person visit.
            </p>  
            <p className= "before-arrival-text"> 
              <span className = "before-arrival-header">By Phone</span><br></br>
              Call (404)-404-4444, Monday-Sunday, from 8 a.m. to 5 p.m. to
              schedule your appointment, and one of our scheduling representatives
              can schedule you to the correct provider and service. Additionally,
              can determine a referral is required for your visit.
            </p>
            <p className= "inline-text"> 
              <span className = "inline-header">Online</span><br></br><br></br>
              If you are an exisiting IRL Anti-Virus patient, have an account with us,
              and want to avoid waiting on hold, you can  <Link className= "inline-link" to="/signup">log in here </Link>
               and make your appointment without having to pick up the phone.
              If you do not have an account with us, <Link className= "inline-link" to="/signup">create your account here</Link>.
            </p>  
            <p className= "before-arrival-text"> 
                <span className="bold-emergency">If you have a medical emergency, please dial 911 immediately and ask to be taken to a hospital.</span>
            </p>  
            <hr width="100%" color="black" />
            <span className= "treatment-header-text">What to Bring</span>
            <p className= "before-arrival-text"> 
                Please plan to arrive early to your appointment about 15 minutes ahead. Bring the following items to your appointment:
            </p>
            <div className ="bullet-list-arrival">
              <ul>
                <li className ="solo-bullet">Your photo ID</li>
                <li className ="solo-bullet">Your health insurance plan card</li>
                <li className ="solo-bullet">All current medications</li>
                <li className ="solo-bullet">All outside medical records or test results (if your physician requested them)</li>
                <li className ="solo-bullet">Any questions you have for your doctor</li>
              </ul>
            </div>  
            <hr width="100%" color="black" />
            <span className= "treatment-header-text">Once You Arrive</span>
            <p className= "before-arrival-text"> 
                Before your appointment, you'll receive an email message letting you know
                it's time for your appointment. If you have an questions call our phone number
                (404)-404-4444. Since you will fill out your personal information when booking an appointment,
                you just need to speak to the receptionist upon arrival. The receptionist will direct you
                to your room.

            </p>
      </div><br></br>
      <hr width="100%" color="black" />

      
      <div className="bottom-page">
        <div className="location-info"> 
          <p className="info">
            <span className="bold-title">Contact Us</span><br></br>
            <img className="location-pic" src={location_pic} alt="location_pic"/><br></br>
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
            <img className="social-media" src={facebook} alt= "facebook"/>
            <img className="social-media" src={twitter} alt="twitter"/>
            <img className="social-media" src={linkedin} alt ="linkedin"/>
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

export default Home_Appointment;