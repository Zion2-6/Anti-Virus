import React from "react"
import {Link} from "react-router-dom"
import './Home.css'
import './About_Us.css'
import caduceus from './pictures/caduceus.png'
import location_pic from "./pictures/location.png"
import facebook from "./pictures/facebook.png"
import twitter from "./pictures/twitter.png"
import linkedin from "./pictures/linked-in.png"
const About_Us = () => {
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
        <span className= "about-us-header-text">About Us</span>
          <hr width="100%" color="black" />
            <p className= "about-us-body-text">
            Welcome to IRL Anti-Virus, where your health and safety are our top priority. In today’s age the world seems fast-paced and can often feel overwhelming, especially when it comes to securing timely and convenient hospital appointments. That’s where we come in.<br></br><br></br>
            We are more than just a platform, we are your trusted partner in navigating the healthcare system with ease when seeking proper care. The services we provide are curated towards our patients, which is a simplification of the appointment scheduling process. 
            Our website is designed to connect patients with healthcare providers efficiently, and eliminating long wait times.<br></br><br></br>
            Behind IRL Anti-Virus is a team of dedicated healthcare professionals who are passionate about making healthcare accessible to all and making hospital visits less daunting. Our community is dedicated to promoting health and wellness. We believe in empowering our patients with the resources and care they need to take charge of their health.
            Every health journey is unique and at IRL Anti-Virus, we’re committed to supporting you every step of the way. Whether your booking your first appointment or managing ongoing care, we’re here to ensure your experience is as stress-free as possible.
            </p>
          <hr width="100%" color="black" />
          <span className = "about-us-header-text">Vision, Mission, & Values</span><br></br>
            <span className= "value-headers">Vision</span>
              <p className ="value-body-text">
                IRL Anti-Virus will become the leading appointment system for healthcare in the United States.
              </p>
            <span className= "value-headers">Mission</span>
              <p className ="value-body-text">
                Our mission is to help all those seeking health care and provide the optimal service to our patients.
              </p>
            <span className= "value-headers">Values</span>
              <p className = "value-body-text">
              We have strong values that impacts our every decision and shapes the way we interact with our patients and the healthcare community. We deliver primary care with compassion, kindness, and empathy.  Here’s what we stand by:
              </p>
              <p className = "value-body-text2">
                <span className= "value-font">Empathy and Understanding:</span> We approach every situation with empathy, striving to understand the patient and address the unique needs of each individual.<br></br><br></br>
                <span className= "value-font">Trust and Integrity:</span> Building a trustworthy platform where users’ information is prioritized and protected. We always put the interests of our users’ first.<br></br><br></br>
                <span className= "value-font">Empowerment:</span> We empower our users’ with the resources they need to take control of their health on their journey. By providing accessible information and support, we enable patients to make informed decisions about their healthcare. <br></br><br></br>
                <span className= "value-font">Serving Others with Excellence:</span> We provide others the optimal care that they expect and desire. Everyone is treated with the same compassion from healthcare providers<br></br><br></br>
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

export default About_Us;