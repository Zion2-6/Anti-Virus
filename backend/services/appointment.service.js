import { db } from "../config/db.js";

const handleCreateAppointment = (req, res) => {
  const {
    patient_id,
    user_id,
    specializations,
    hospital,
    ssn,
    gender,
    phoneNumber,
    streetAddress,
    insuranceName,
    room,
    state,
    zipCode,
    isInsured,
    severity_level,
    isVIP,
    symptoms,
    medicalHistory,
    startEvent,
    endEvent,
  } = req.body;

  let insurance_id;


  try {
    const appointmentData = {
      patient_id,
      doctor_id: specializations,
      hospital_id: hospital,
      room_number: room,
      start_time: startEvent,
      end_time: endEvent,
    };

    db.query(
      "INSERT INTO appointment SET ?",
      appointmentData,
      (err, result) => {
        if (err) {
          console.error("Error creating appointment: ", err);
          res.status(500).json({ error: "Failed to create appointment" });
          return;
        }
        res.json({
          message: "Appointment created successfully",
          appointment_id: result.insertId,
        });
      }
    );
  } catch (error) {
    console.log("Error creating appointment: ", error);
  }

  try {
    const insuranceData = {
      insurance_name: insuranceName,
      insurance_phone: phoneNumber,
      street_address: streetAddress,
      state_address: state,
      zipcode_address: zipCode,
    };

    db.query("INSERT INTO insurance SET ?", insuranceData, (err, result) => {
      if (err) {
        console.error("Error creating insurance: ", err);
        res.status(500).json({ error: "Failed to create insurance" });
        return;
      }
      insurance_id = result.insertId;
    
    const patientData = {
      user_id: user_id,
      SSN: ssn,
      Gender: gender,
      insurance_id,
      isInsured,
      severity_level,
      isVIP,
      medical_history: medicalHistory,
    };

    db.query(
      "UPDATE patient SET ? WHERE patient_id = ?",
      [patientData, patient_id],
      (err) => {
        if (err) {
          console.error("Error updating patient: ", err);
          res.status(500).json({ error: "Failed to update patient" });
          return;
        }
      }
    );
  });
 } catch (error) {
    console.log("Error updating patient: ", error);
  }

  try {
    // Iterate over the symptoms array and insert each combination into the patient_symptom table
    symptoms.forEach((symptom_id) => {
      const patientSymptomData = {
        patient_id: patient_id,
        symptom_id: symptom_id,
      };
      console.log("patientSymptomData:>>>>>>>> ", patientSymptomData);
      db.query(
        "INSERT INTO patient_symptom SET ?",
        patientSymptomData,
        (err, result) => {
          if (err) {
            console.error("Error inserting patient_symptom data:", err);
          } else {
            console.log("Inserted patient_symptom data:", result);
          }
        }
      );
    });
  } catch (error) {
    console.log("Error creating patient: ", error);
  }
};

export { handleCreateAppointment };
