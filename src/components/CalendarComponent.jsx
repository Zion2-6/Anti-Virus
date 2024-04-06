import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format"; // Corrected import path
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import './CalendarComponent.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
// passing book appointment selection
const CalendarComponent = ({onEventChange}) => {
 
  //localizar of calendar
  const locales = {
    "en-US": require("date-fns/locale/en-US")
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay, 
    locales
  });

  //default title of appointment 
  const  [newEvent, setNewEvent] = useState({title:"Appointment" , start:"", end:""});
  const  [allEvents, setAllEvents] = useState([]);
  // min and max times available for appointments
  const filterPassedTime = (time) => {
    //check if appointment is a valid time
  if(newEvent.start instanceof Date && !isNaN(newEvent.start.getMinutes())) {
    const selectedDate = new Date(time);
    return selectedDate.getTime() > newEvent.start.getTime(); 
  } else {
    return false;
  }
  }
  // makes sure its the same date
  const isSameDay = (start_date, end_date) =>{
    return(
      start_date.getFullYear() === end_date.getFullYear() &&
      start_date.getMonth() === end_date.getMonth() &&
      start_date.getDate() === end_date.getDate()
    );
  };
  // alerts when the date is different from the first one 
  const handleStartChange = (start) => {
    if (start && newEvent.end && !isSameDay(start, newEvent.end)){
      alert("Please select the end date on the same day as the start date");
    }else {
      setNewEvent({...newEvent, start});
      
    }
  };
  
  const handleEndChange = (end) => {
    if (end && newEvent.start && !isSameDay(end, newEvent.start)){
      alert("Please select the end date on the same day as the start date");
    }else {
      setNewEvent({...newEvent, end});
      
    }
  };

  //only one appointment can be scheduled
  function handleAddEvent(){
    if (newEvent.start && newEvent.end){ 
      const finalEvent = [newEvent];
      setAllEvents([]);
      setAllEvents(finalEvent); 
      setHasClicked(true);
      onEventChange(finalEvent);
      // view selected appointment
      console.log("Selected appointment: ", newEvent.start);
      console.log("Selected appointment: ", newEvent.end);

    } else {
        alert("Please select both start and end dates.");
    }
  }
  //delete current event
  const handleDeleteEvent = () =>{
    const finalEvent = [];
    setNewEvent({ title: "Appointment", start: "", end: "" });
    onEventChange(finalEvent);
    setHasClicked(false);
    setAllEvents([]);
    
  }

  //checks if button is clicked/flag
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <div className= "parent-calendar-container">
      <div className="calendar-container">
        <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"/>
      </div>
      <div className= "appt-selection-box">
        <DatePicker className="change-datepicker" placeholderText="Start Date and Time" style={{marginRight: "10px", marginBottom: "50px"}}
          selected={newEvent.start} onChange={handleStartChange}
          showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" TimeFormat="HH:mm"
          minTime={setHours(setMinutes(new Date(), 0),9)}
          maxTime={setHours(setMinutes(new Date(), 59),16)}
          />
         
        <DatePicker className="change-datepicker" placeholderText="End Date and Time"
          selected={newEvent.end} onChange={handleEndChange}
          showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" TimeFormat="HH:mm"
          filterTime={filterPassedTime}
          minTime={setHours(setMinutes(new Date(), 0),9)}
          maxTime={setHours(setMinutes(new Date(), 59),16)}/>            
        <div className="center-button">
          <button disabled={hasClicked} className="add-event-button" onClick={handleAddEvent}>Add Selection</button>
          <button disabled={!hasClicked} className="delete-event-button" onClick={handleDeleteEvent}>Delete Selection</button>
        </div>
      </div>
      
    </div>
  );
};

export default CalendarComponent;
