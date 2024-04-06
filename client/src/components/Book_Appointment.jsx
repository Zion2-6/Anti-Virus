import React, { useState, useEffect } from "react"
import {Link, useNavigate} from "react-router-dom"
import './Home.css'
import './Book_Appointment.css'
import useDropDown from "./UseDropDown";
import caduceus from './pictures/caduceus.png'
import patient_icon from './pictures/patient.png'
import calendar_icon from './pictures/calendar.png'
import check from './pictures/check-2.png'
import down from './pictures/down.png'
import CalendarComponent from './CalendarComponent'
import format from "date-fns/format";


const Book_Appointment = () => {
  
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
    setSelectedRoom(room_number);
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
        room: selectedRoom,
        gender: selectedGender,
        room: selectedRoom,
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
      console.log("Room: ", selectedRoom);
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
          <img className = "dashboard-icon" src={patient_icon}></img>
          <p className = "dashboard-header">Dashboard</p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/patient-record">Patient Record</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/book-appointment">Book an Appointment</Link></p>
          <p><Link className= "dashboard-link" to="/dashboard-patient/prescription">Prescription</Link></p>
          <p><a className= "dashboard-link" href="#">Bill</a></p>
          <p><a className= "dashboard-link" href="#">Payment</a></p>
      </div>
      
      <div className= "blue-container">
            <div className = "first-header-container">
              <div className = "blue-header">
                Book appointment
              </div>
                  <img className = "icon-match-header" src={calendar_icon}></img>
              </div>
              <p className= "blue-section-headers">Patient Information</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Email:
                    </p>
                    <input className="email-bubble" type="text" name="email" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required/>
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                    <span className= "gender-text"> Gender: </span>
                    </p>
                    <div className="gender-container">
                        <button type="button" className="select-gender" onClick={genderDropDown.toggleList}>
                          Select Gender
                          <img className="down-pic" src={down} alt="Down" />
                        </button>
                        <ul className="list-items" style={{ display: genderDropDown.isOpen ? 'block' : 'none' }}>
                          {genderOptions.map((gender_option) => (
                            <li key={gender_option.value} className="item" onClick={() => handleGenderSelect(gender_option.value)}>
                              <span className="checkboxes">
                                {/* only shows checks for selected genders*/}
                                <img className={`check-pic ${selectedGender === gender_option.value ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                              </span>
                              {/* only gender name is shown to user */}
                              <span className="item-text">{gender_option.gender}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                  <div className = "bubbles3">
                    <p className="bubbles-header">
                        SSN:
                    </p>
                    <input className="SSN-bubble" type="text" name="SSN" pattern="^\d{3}\d{2}\d{4}$" required 
                    onChange={(e) =>setSSN(e.target.value)}/>
                  </div>
              </div>

              <p className= "blue-section-headers">Medical Concerns</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                      Symptoms:
                    </p>
                    <div className="symptoms-container">
                      <button type="button" className="select-symptom" onClick={symptomDropDown.toggleList}>
                          Select Symptoms
                        <img className="down-pic" src={down} alt="Down" />
                      </button>
                      {/*Mapping symptom ids to names */}
                       <ul className="list-items" style={{ display: symptomDropDown.isOpen ? 'block' : 'none' }}>
                          {
                            symptoms.map((symptom) => (
                              <li key={symptom.symptom_id} className="item" onClick={() => handleSymptomSelect(symptom.symptom_id)}>
                                <span className="checkboxes">
                                  <img className={`check-pic ${selectedSymptoms.includes(symptom.symptom_id) ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10"/>
                                </span>
                                 <span className="item-text">{symptom.symptom_name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>  
                      </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Medical History:
                    </p>
                    <input className="medical-history-bubble" type="text" name="history" pattern="^[a-zA-Z0-9._\s]{1,255}$" required 
                           onChange={(e) =>setMedicalHistory(e.target.value)}/>
                  </div>
                
              </div>

              <p className= "blue-section-headers">Insurance Information</p><br></br>
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
            
              <p className= "blue-section-headers">Selection</p><br></br>
              <div className= "patient-info-bubbles">
              
                  <div className = "bubbles1">
                    <p className="bubbles-header">
                        Doctor Speciality:
                    </p>
                    <div className="specializations-container">
                      <button type="button" className="select-specialization" onClick={specializationDropDown.toggleList}>
                    Select Specialization
                        <img className="down-pic" src={down} alt="Down" />
                      </button>
                      <ul className="list-items" style={{ display: specializationDropDown.isOpen ? 'block' : 'none' }}>
                        {mockSpecializations.map((specialization) => (
                          <li key={specialization.doctor_id} className="item" onClick={() => handleSpecializationSelect(specialization.doctor_id)}>
                            <span className="checkboxes">
                              {/*Ensuring the checkmark is small and only shows checks for selected specializations*/}
                              <img className={`check-pic ${selectedSpecialization === specialization.doctor_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                            </span>
                            <span className="item-text">{specialization.specialization}</span>
                          </li>
                          ))}
                        </ul>
                      </div>
                      </div>
                    <div className = "bubbles2">
                    <p className="bubbles-header">
                        Hospital:
                    </p>
                    <div className="hospitals-container">
                      <button type="button" className="select-hospital" onClick={hospitalDropDown.toggleList}>
                        Select Hospital
                        <img className="down-pic" src={down} alt="Down" />
                      </button>
                      <ul className="list-items" style={{ display: hospitalDropDown.isOpen ? 'block' : 'none' }}>
                        {hospitals.map((hospital) => (
                          <li key={hospital.hospital_id} className="item" onClick={() => handleHospitalSelect(hospital.hospital_id)}>
                            <span className="checkboxes">
                              {/* Show checkmark if hospital is selected */}
                              <img className={`check-pic ${selectedHospitalID === hospital.hospital_id ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                            </span>
                            <span className="item-text">{hospital.hospital_name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className ="bubbles3">
                    <p className="bubbles-header">
                        Room Number:
                    </p>
                    <div className="room-container">
                      <button type="button" className="select-room" onClick={roomDropDown.toggleList}>
                        Select Room
                        <img className="down-pic" src={down} alt="Down" />
                      </button>
                      <ul className="list-items" style={{ display: roomDropDown.isOpen ? 'block' : 'none' }}>
                        { selectedRoom.map((room) => (
                          <li key={room.room_number} className="item" onClick={() => handleRoomSelect(room.room_number)}>
                            <span className="checkboxes">
                              {/* Show checkmark if room number is selected */}
                              <img className={`check-pic ${selectedRoom === room.room_number ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
                            </span>
                            <span className="item-text">{room.room_number}</span>
                          </li>
                        ))}
                        
                      </ul>
                    
                    </div>
                  </div>
                </div>
                <div className= "patient-info-bubbles">
                  
                    
                  <div className ="bubbles6">
                    <p className="bubbles-header2">
                        Location:
                    </p>
                    <div className= "hospital-location" style={{width: '100%', height: '100%'}}> {selectedHospital && selectedHospital.street_address} </div>
                  </div>
                  </div>
              

              <p className= "blue-section-headers">Preferred Date & Time</p><br></br>
              
              <div><CalendarComponent onEventChange={handleCalendarEventChange}/>
              </div>
                          
              <button className= "schedule-appt-button" onClick={(e) => handleSubmit(e)}>Schedule Appointment</button>
              <p><a className= "dashboard-link" href="#">Go Back</a></p>
        </div>
    </div>
    </form>
 </div>   
    );
};

export default Book_Appointment;