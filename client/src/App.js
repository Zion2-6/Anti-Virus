import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 
import Forgot_Password from "./components/Forgot_Password"
import Forgot_Password_Success from "./components/Forgot_Password_Success"
import Home from "./components/Home";
import About_Us from "./components/About_Us";
import Patient_Care_And_Treatment from "./components/Patient_Care_And_Treatment";
import Patient_And_Visitor_Info from "./components/Patient_And_Visitor_Info";
import Book_Appointment  from "./components/Book_Appointment";
import CalendarComponent from "./components/CalendarComponent";
import Home_Appointment from "./components/Home_Appointment";
import Prescription_Doctor from "./components/Prescription_Doctor";
import All_Prescription from "./components/All_Prescription";
import Prescription_Patient from "./components/Prescription_Patient";
import Patient_Record_View_P from "./components/Patient_Record_View_P";
import Patient_Record_View_D from "./components/Patient_Record_View_D";
import Patient_Record_View_R from "./components/Patient_Record_View_R";
import Booking_View_D from "./components/Booking_View_D";
import Booking_View_R from "./components/Booking_View_R";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/login" element={<Login />} /> {/* Changed 'login' to 'Login' */}
        <Route path="/signup" element={<Signup />} /> {/* Changed 'login' to 'Login' */}
        <Route path="/forgot-password" element={<Forgot_Password/> }/>
        <Route path="/forgot-password-success" element={<Forgot_Password_Success/>}/>
        <Route path="/about-us" element={<About_Us/>}/>
        <Route path= "/patient-care-and-treatment" element={<Patient_Care_And_Treatment/>}/>
        <Route path= "/patient-and-visitor-info" element={<Patient_And_Visitor_Info/>}/>
        <Route path= "/dashboard-patient/book-appointment" element={<Book_Appointment/>}/>
        <Route path= "/Calendar" element={<CalendarComponent/>}/>
        <Route path= "/book-appointment" element={<Home_Appointment/>}/>
        <Route path= "/dashboard-doctor/prescription" element={<Prescription_Doctor/>}/>
        <Route path= "/dashboard-doctor/modify-prescription" element={<All_Prescription/>}/>
        <Route path= "/dashboard-patient/prescription" element={<Prescription_Patient/>}/>
        <Route path= "/dashboard-doctor/patient-records" element={<Patient_Record_View_D/>}/>
        <Route path= "/dashboard-patient/patient-record" element={<Patient_Record_View_P/>}/>
        <Route path= "/dashboard-receptionist/patient-records" element={<Patient_Record_View_R/>}/>
        <Route path= "/dashboard-doctor/appointments" element={<Booking_View_D/>}/>
        <Route path= "/dashboard-receptionist/appointments" element={<Booking_View_R/>}/>

      </Routes>
    </div>
  );
}

export default App;
