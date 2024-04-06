import React from "react"
import {Link} from "react-router-dom"
import './Home.css'
import caduceus from './pictures/caduceus.png'
import doctor_nurses from './pictures/doctor_nurses.jpg'
import doctor_patient from "./pictures/doctor_patient.jpg"
import doctor_research from "./pictures/doctor_research.jpg"
import patient_care from "./pictures/patient_care.jpg"
import location_pic from "./pictures/location.png"
import facebook from "./pictures/facebook.png"
import twitter from "./pictures/twitter.png"
import linkedin from "./pictures/linked-in.png"
const Home = () => {
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
      
      <div className="body-page">
        <div className = "pic-1">
            <img className="doctor-nurse-pic" src={doctor_nurses}/>
          </div>
          <div className="description">
            Your health is our primary concern. Our dedicated staff prioritizes your well-being and ensures your safety within our state-of-the-art facilities. 
            At IRL Anti-Virus, we understand that being healthy transcends the absence of sickness—it encompasses mental, physical, and social well-being. <br></br>
            <p className="tag-line">It’s not just about treatment; it’s about nurturing, healing, and promoting a healthier future for all our patients.</p><br></br>
            Our approach to healthcare goes beyond traditional treatment methods; we focus on comprehensive healing processes that cater to individual needs. 
            With a wide range of medical services, from preventive care to complex surgeries, we are equipped to address every aspect of your health. 
          </div>
      </div>
      <div className="stats">
        <div className="first-stat">
          <span className= "red-font">#1</span>Most Wired Hospital
        </div>
        <div className="second-stat">
          <span className="red-font">$250 MM</span>Invested in upgrades
        </div>
        <div className = "third-stat">
          <span className = "red-font">510,000</span>Patient visits per year
        </div>
      </div>
      <hr width="100%" color="black" />

      <div className="body2-page">
        <div className="desc-1">
          Why Choose IRL Anti-Virus?
          <p class="desc-explanation">Our mission is to help all those seeking health care and provide the optimal service to our patients. We dedicate ourselves to help improve the lives of patients.</p>
            <img className="doctor-patient" src={doctor_patient}/>
          </div>
        <div className="desc-2">
          Profound Research
          <p className="desc-explanation">In order to deliver the best care possible, Atlanta saw the introduction of numerous novel medical techniques as well as cutting-edge treatments and procedures.</p>
          <img className="doctor-researcher" src={doctor_research}/>
        </div>
        <div className="desc-3">
          Patient care
          <p className="desc-explanation">We invest all resources into providing the best care for our patients. We form relationships with our patients and pride ourselves in the services we provide. </p>
          <img className="patient-care" src={patient_care}/>
        </div>
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

export default Home;