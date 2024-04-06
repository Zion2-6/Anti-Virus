import React, { useState } from "react"
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
  // fake values similar to database
  const mockSymptoms = [
    { symptom_id: 1, symptom_name: 'Fever' },
    { symptom_id: 2, symptom_name: 'Diarrhea' },
    { symptom_id: 3, symptom_name: 'Fatigue' },
    { symptom_id: 4, symptom_name: 'Muscle aches' },
    { symptom_id: 5, symptom_name: 'Wheezing' },
    { symptom_id: 6, symptom_name: 'Depression' },
    { symptom_id: 7, symptom_name: 'Headache' },
    { symptom_id: 8, symptom_name: 'Cough' },
    { symptom_id: 9, symptom_name: 'Sore throat' },
    { symptom_id: 10, symptom_name: 'Nausea' },
    { symptom_id: 11, symptom_name: 'Vomiting' },
    { symptom_id: 12, symptom_name: 'Runny nose' },
    { symptom_id: 13, symptom_name: 'Stuffy nose' },
    { symptom_id: 14, symptom_name: 'Chest pain' },
    { symptom_id: 15, symptom_name: 'Rash' },
    { symptom_id: 16, symptom_name: 'Shortness of breath' },
    { symptom_id: 17, symptom_name: 'Joint pain' },
    { symptom_id: 18, symptom_name: 'Weight loss or gain' },
    { symptom_id: 19, symptom_name: 'Difficult sleeping' },
    { symptom_id: 20, symptom_name: 'Memory problems or confusion' },
    { symptom_id: 21, symptom_name: 'Change in bowel movements' },
    { symptom_id: 22, symptom_name: 'Pelvic pain' },
    { symptom_id: 23, symptom_name: 'Dizziness' },
    { symptom_id: 24, symptom_name: 'Sudden numbness' },
  ];

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
  
  const mockHospitals = [
    { 
      hospital_id: 1000 , 
      hospital_name: 'Northside Hospital', 
      hospital_location:'1000 Johnson Ferry Rd NE, Atlanta' ,
      rooms: [
        { room_number: 100 },
        { room_number: 101 },
        { room_number: 102 },
        { room_number: 103 },
        { room_number: 104 },
        { room_number: 200 },
        { room_number: 201 },
        { room_number: 202 },
        { room_number: 203 },
        { room_number: 204 }
      ]
    },
    {
      hospital_id: 1001 , 
      hospital_name: 'St. Luke Baptist Hospital',
      hospital_location: '7930 Floyd Curl Dr, Lawrenceville',
      rooms: [
        { room_number: 111 },
        { room_number: 112 },
        { room_number: 113 },
        { room_number: 114 },
        { room_number: 115 },
        { room_number: 222 },
        { room_number: 223 },
        { room_number: 224 },
        { room_number: 225 },
        { room_number: 226 }
      ]
    },
    {
      hospital_id: 1002 , 
      hospital_name: 'Emory Hospital', 
      hospital_location: '6325 Hospital Pkwy, Johns Creek',
      rooms: [
        { room_number: 141 },
        { room_number: 151 },
        { room_number: 161 },
        { room_number: 171 },
        { room_number: 181 },
        { room_number: 209 },
        { room_number: 210 },
        { room_number: 212 },
        { room_number: 214 },
        { room_number: 216 }
      ]
    },
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
  const[selectedHospitalObj, setSelectedHospitalObj] =useState(null);
  const[selectedHospitalName, setSelectedHospitalName] = useState('');
  const[selectedLocation, setSelectedLocation] = useState('');
  const[selectedRoom, setSelectedRoom] = useState([]);
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
  //alows only one hospital selection alongside with it's location at a time
  const handleHospitalSelect = (hospital_id) => {
    // variable assigned
    // look through mockhospitals array to return element if same match with attribute
    const chosenHospital = mockHospitals.find((hospital_obj) => 
                           hospital_obj.hospital_id === hospital_id);
    //debugging to ensure id is found
    console.log(chosenHospital);
    if(chosenHospital){
      setSelectedHospitalObj(chosenHospital);
      setSelectedHospitalName(chosenHospital.hospital_name);
      setSelectedLocation(chosenHospital.hospital_location);
      setSelectedRoom(chosenHospital.rooms);
      //debugging
      console.log(chosenHospital.rooms);

    }else {
      //debugging
      console.error("Hospital with ID ${hospital_id} not found");
      //resets values
      setSelectedHospitalObj(null);
      setSelectedLocation('');
      setSelectedHospitalName('');
    }
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
        hospital: selectedHospitalObj?.hospital_id,
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
      console.log("Hospital: ", selectedHospitalName);
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
          <p><a className= "dashboard-link" href="#">Patient Record</a></p>
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
                            mockSymptoms.map((symptom) => (
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
                        {mockHospitals.map((hospital) => (
                          <li key={hospital.hospital_id} className="item" onClick={() => handleHospitalSelect(hospital.hospital_id)}>
                            <span className="checkboxes">
                              {/* Show checkmark if hospital is selected */}
                              <img className={`check-pic ${selectedHospitalName === hospital.hospital_name ? '' : 'check-pic-hidden'}`} src={check} alt="Check" width="10" height="10" />
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
                        { selectedHospitalObj?.rooms?.map((room) => (
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
                    <div className= "hospital-location" style={{width: '100%', height: '100%'}}> {selectedLocation} </div>
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