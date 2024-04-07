import React, { useState, useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import receptionist_icon from './pictures/receptionist.png'
import calendar_icon from './pictures/calendar.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import CalendarComponent from './CalendarComponent'
import format from "date-fns/format";


const Booking_View_R = () => {
  
  const mockSpecializations = [
    { doctor_id: 1, specialization: 'General Medicine' },
    { doctor_id: 2, specialization: 'Orthopedics' },
    { doctor_id: 3, specialization: 'Pediatrics' },
    { doctor_id: 4, specialization: 'Gastroenterology' },
    { doctor_id: 5, specialization: 'Endocrinology' },
    { doctor_id: 6, specialization: 'Urology' },
    { doctor_id: 7, specialization: 'Hematology' },
    { doctor_id: 8, specialization: 'Dermatology' },
    { doctor_id: 9, specialization: 'Ophthalmology' },
    { doctor_id: 10, specialization: 'Neurology' },
    { doctor_id: 11, specialization: 'Cardiology' },
    { doctor_id: 12, specialization: 'Obstetrics and Gynecology' },
  ];
  

  //const navigate = useNavigate();
  //select through gender options
  const genderOptions =[
    {gender: 'Male', value:'M'},
    {gender: 'Female', value: 'F'}
  ];

  // setting selections
  const[selectedSymptoms, setSelectedSymptoms] =useState([]);
  const[selectedSpecialization, setSelectedSpecializations]=useState('');
  const[selectedGender, setSelectedGender] = useState('');
  // data for submitting book appointment
  const [ssn, setSSN] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  //usage of down down method to select items or an item in a list 
  const symptomDropDown = useDropDown();
  const specializationDropDown = useDropDown();
  const hospitalDropDown = useDropDown();
  const genderDropDown = useDropDown();
  const roomDropDown = useDropDown();
  //allows only one specialization and selection at a time
  const handleSpecializationSelect = (doctor_id) => {
    setSelectedSpecializations(doctor_id);
  }
  const handleGenderSelect = (value) =>{
    setSelectedGender(value);
  }
  //fetching data from hospital, symptoms
  const [hospitals, setHospitals] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  // fetch data
  useEffect(() =>{
      const getHospital = async ()=>{
        try{
            const res= await fetch('http://localhost:8800/hospital');
            if(!res.ok){
                throw new Error('Network error')
            }
            const getData= await res.json();
            setHospitals(getData);
            console.log(getData);
        } catch(error){
            console.error("Couldn't fetch hospital: ", error);
        }
        };
        const getRoom = async () => {
          try {
            const res = await fetch('http://localhost:8800/room');
            if (!res.ok) {
              throw new Error('Network error');
            }
            const getData = await res.json();
            setRooms(getData);
          } catch (error) {
            console.error("Couldn't fetch rooms:", error);
          }
        };
        const getSymptoms = async () => {
          try {
            const res = await fetch('http://localhost:8800/symptom');
            if (!res.ok) {
              throw new Error('Network error');
            }
            const getData = await res.json();
            // debugging
            console.log(getData);
            setSymptoms(getData);
          } catch (error) {
            console.error("Couldn't fetch symptoms:", error);
          }
        };
        getSymptoms();
        getHospital();
        getRoom();
      }, []);
  const[selectedHospital, setSelectedHospital] = useState([]);
  const[selectedRoom, setSelectedRoom] = useState([]);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(null);
  const [selectedHospitalID, setSelectedHospitalId] =useState(null);

  //alows only one hospital selection alongside with it's location at a time
  const handleHospitalSelect = async (hospital_id) => {
    setSelectedHospitalId(hospital_id);
    // variable assigned
    // look through hospitals that are fetched to return element if same id selected by patient
    const hospital_selection = hospitals.find(hospital =>  hospital.hospital_id === hospital_id);
    setSelectedHospital(hospital_selection);
    // new array with elements that make sure to check for room selection corresponding to hospital id
    const rooms_selection = rooms.filter(room => room.hospital_id === hospital_id);
    setSelectedRoom(rooms_selection);
  }
  // only one room selection at a time
  const handleRoomSelect = (room_number) =>{
    // ensure its in an array
    console.log("Selecting room: ", room_number);
    setSelectedRoomNumber(room_number);
  };
  //allows multiple symptom selections
  const handleSymptomSelect =(symptom_id) =>{

    setSelectedSymptoms((currSelectedSymptoms) => {
      if(currSelectedSymptoms.includes(symptom_id)){
        //new array after deselection
      return currSelectedSymptoms.filter(id => id !== symptom_id);
    } else {
        //new arrary after adding symptoms
      return[...currSelectedSymptoms, symptom_id];
    }

  });
};

    //events from calendar
    const [calendarEvents, setCalendarEvents] = useState([]);
    const handleCalendarEventChange = (finalEvent) => {
      setCalendarEvents(finalEvent);
    };
    //checks if form is submitted default is false
    const[formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = async (e) =>{
      e.preventDefault();
      //location not needed for data submission
      //deubgger
      if(formSubmitted) {
        console.log("Form already submitted. Preventing multiple submissions.");
        return;
    }
      setFormSubmitted(true);
      // only one event
      const event = calendarEvents[0];
      // formatted separately so they're not in an array
      const formatStart = format(event.start, 'yyyy-MM-dd HH:mm:ss');
      const formatEnd =format (event.start, 'yyyy-MM-dd HH:mm:ss');
      // checking if a user is insured
      const isInsured = insuranceName !== '' ? 1: 0;
      console.log("Patient is insured: ", isInsured);
      const formData = {
        symptoms: selectedSymptoms,
        specializations: selectedSpecialization,
        hospital: selectedHospital,
        room: selectedRoomNumber,
        gender: selectedGender,
        ssn,
        medicalHistory,
        insuranceName,
        isInsured,
        phoneNumber,
        streetAddress,
        state,
        zipCode,
        startEvent: formatStart,
        endEvent: formatEnd
      };
      console.log("Information to be submitted...");
      console.log("Symptom List: ", selectedSymptoms);
      console.log("Room: ", selectedRoomNumber);
      console.log("SSN: ", ssn);
      console.log("Medical History: ", medicalHistory);
      console.log("Insurance Name: ", insuranceName);
      console.log("Street Address: ", streetAddress);
      console.log("Phone Number: ", phoneNumber);
      console.log("State: ", state);
      console.log("Zip Code: ", zipCode);
      console.log(formData);
      //navigate =('/dashboard-patient');

    }
    


    return (
      <div className ="home">
        <form onSubmit={handleSubmit}>
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
      <div className = "parent-container">
      <div className = "dashboard-container">
          <img className = "dashboard-icon" src={receptionist_icon}></img>
          <p className = "dashboard-header">Dashboard</p>
          <p><Link className= "dashboard-link" to="/dashboard-receptionist/patient-records">Patient Records</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-receptionist/appointments">Appointments</Link></p>
          <p><a className= "dashboard-link" href="#">Billim</a></p>
      </div>
      
      <div className= "blue-container">
            <div className = "first-header-container">
              <div className = "blue-header">
                Book appointment
              </div>
                  <img className = "icon-match-header" src={calendar_icon}></img>
              </div>
              <p className= "blue-section-headers">Appointment Information</p><br></br>
              <div><CalendarComponent onEventChange={handleCalendarEventChange}/>
              </div>
            <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Insurance Name:
                    </p>
                    <input className="insurance-bubble" type="text" name="insurance" pattern="^[A-Za-z &\-]+$" required 
                           onChange={(e) =>setInsuranceName(e.target.value)}/>
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Phone Number:
                    </p>
                    <input className="phone-bubble" type="text" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}$" required 
                          onChange={(e) =>setPhoneNumber(e.target.value)}/>
                  </div>
                  </div>
                  <div className= "patient-info-bubbles">
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        Street Address:
                    </p>
                    <input className="street-bubble" type="text" name="street" required 
                            onChange={(e) =>setStreetAddress(e.target.value)}/>
                  </div>
                  <div className = "bubbles4">
                    <p className="bubbles-header">
                        State:
                    </p>
                    <input className="state-bubble" type="text" name="state" pattern="pattern=[A-Za-z]{2}$" required 
                            onChange={(e) =>setState(e.target.value)}/>
                  </div>
                  <div className = "bubbles5">
                    <p className="bubbles-header">
                        ZIP Code:
                    </p>
                    <input className="zip-bubble" type="text" name="zip" pattern="[0-9]{5}$" required 
                      onChange={(e) =>setZipCode(e.target.value)}/>
                  </div>
              </div>
      

              <p className= "blue-section-headers">Preferred Date & Time</p><br></br>
              
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
        </div>
    </div>
    </form>
 </div>   
    );
};

export default Booking_View_R;