import React from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './About_Us.css'
import './Patient_Care_And_Treatment.css'
import './Patient_And_Visitor.css'
import caduceus from './pictures/caduceus.png'
import location_pic from "./pictures/location.png"
import facebook from "./pictures/facebook.png"
import twitter from "./pictures/twitter.png"
import linkedin from "./pictures/linked-in.png"
import train from "./pictures/train.png"
import parked_car from "./pictures/parked-car.png"
import check from "./pictures/check.png"

const Patient_And_Visitor_Info = () => {
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
        <span className= "about-us-header-text">Patient & Visitor Info</span>
          <hr width="100%" color="black" />
            <div className ="appt-check">
            <span className= "treatment-header-text">Appointment Checklist </span>
            <img className="checklist-check" src={check}/>
            </div>
            <p className= "before-arrival-text"> 
              <span className = "before-arrival-header">Before You Arrive</span><br></br>
              Verify where your appointment is at one of IRL Anti-Virus locations. 
              Look at the email you used to book an appointment and there should be an appointment confirmation email sent. 
              The email contains the location of the appointment, date, time, and your doctor. 
              Any issues? Refer to contacting us at (404)-222-1010.
            </p>  
            <p className= "before-arrival-text"> 
                <span className = "before-arrival-header">What to Bring</span><br></br>
                Please plan to arrive early to your appointment about 15 minutes ahead. Bring the following items to your appointment:
            </p>
            <div className ="bullet-list-arrival">
              <ul>
                <li className ="solo-bullet">Your photo ID</li>
                <li className ="solo-bullet">Your health insurance plan card</li>
                <li className ="solo-bullet">All current medications</li>
                <li className ="solo-bullet">Any questions you have for your doctor</li>
              </ul>
            </div>  
            <hr width="100%" color="black" />
            <span className= "treatment-header-text">Visitation Restrictions</span>
            <p className= "before-arrival-text"> 
            IRL Anti-Virus visitation hours will begin 8 a.m. and end at 8 p.m. daily for inpatients, outpatients, and those in the Emergency Room. 
            Exceptions can and will be made together with family.
            <p><span className= "caps-all">ALL</span> visitors must wear a mask covering their mouth and nose at all times (including inpatient rooms) regardless of vaccination status.</p>
            </p> 
            
            <div className="parking-car">
              <div className = "car-and-text">
              <img className="parked-car-pic" src={parked_car}/> 
                <span className="park-text">Parking is available</span>
              </div>
              <li className ="num-bullet">24/7</li>
            </div><br></br> 
            <div className="parking-car">
              <div className = "car-and-text">
              <img className="train-pic" src={train}/> 
                <span className="park-text">Public transportation</span>
              </div>
              <li className ="num-bullet">Marta Blue Line</li><br></br>
            </div>        
      </div><br></br>
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

export default Patient_And_Visitor_Info;