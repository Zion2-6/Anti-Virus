import express from "express"
import mysql from "mysql"
import cors from "cors";
const app = express()

const db = mysql.createConnection({
  host:"hospitalmanagement.cz22gcaos4ot.us-east-2.rds.amazonaws.com",
  user:"root",
  password:"Pollux1002!",
  database:"hdb"

})
app.use(express.json());
app.use(cors())
app.get("/", (req,res)=> {
  res.json("hello this is the backend")
})
app.get("/hospital", (req, res)=> {
  const q = "SELECT * FROM hospital"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/room", (req, res)=> {
  const q = "SELECT * FROM room"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/symptom", (req, res)=> {
  const q = "SELECT * FROM symptom"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/disease", (req, res)=> {
  const q = "SELECT * FROM disease"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/doctor", (req, res)=> {
  const q = "SELECT * FROM doctor"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/doctor_name", (req, res)=> {
  const q =
  `
  SELECT 
        p.user_id,
        p.first_name,
        p.last_name,
        d.specialization,
        d.hospital_id,
        d.doctor_id
  FROM person p
    JOIN doctor d ON p.user_id = d.user_id
    WHERE p.user_role = 'Doctor';`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/patient_name", (req, res)=> {
  const q =
  `
  SELECT 
        p.user_id,
        p.first_name,
        p.last_name,
        u.patient_id
FROM person p
JOIN patient u  ON p.user_id = u.user_id
WHERE p.user_role = 'Patient';`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/patient", (req, res)=> {
  const q = "SELECT * FROM patient"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/patient_id_name", (req, res)=> {
  const q = 
  `
  SELECT 
    p.patient_id, 
    pe.first_name AS patient_first_name, 
    pe.last_name AS patient_last_name
  FROM patient p
    INNER JOIN person pe ON p.user_id = pe.user_id;`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/patient_symptom", (req, res)=> {
  const q = 
  `
  SELECT 
    p.patient_id, 
    s.symptom_id,
    s.symptom_name
  FROM  patient p
    INNER JOIN patient_symptom ps ON p.patient_id = ps.patient_id
    INNER JOIN symptom s ON ps.symptom_id = s.symptom_id;`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
//an array created called symptoms with objects: symptom_id, and symptom_name
//helps simplify pulling information
app.get("/patient_prescription_info", (req, res)=> {
  const q = 
  `
   SELECT 
        p.patient_id, 
        pe.first_name AS patient_first_name, 
        pe.last_name AS patient_last_name,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'symptom_id', ps.symptom_id, 

                'symptom_name', s.symptom_name
            )
        ) AS symptoms
    FROM patient p
      JOIN person pe ON p.user_id = pe.user_id
      LEFT JOIN patient_symptom ps ON p.patient_id = ps.patient_id
      LEFT JOIN symptom s ON ps.symptom_id = s.symptom_id
      GROUP BY p.patient_id;`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.get("/patient_prescription_info_fetch", (req, res)=> {
  const q = 
  `
  SELECT 
    p.patient_id,
    pe.first_name AS patient_first_name, 
    pe.last_name AS patient_last_name,
    pr.prescription_id,
    pr.medicine_name,
    pr.dosage_desc,
    pr.prescription_fee,
    pr.additional_notes
  FROM patient p
    JOIN person pe ON p.user_id = pe.user_id
    LEFT JOIN prescription pr ON p.patient_id = pr.patient_id
    ORDER BY p.patient_id;`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.get("/person", (req, res)=> {
  const q = "SELECT * FROM person"
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/appointment", (req, res) => {
  console.log("Handling /appointment request");
  const q = "SELECT * FROM appointment;";
  db.query(q, (err, data) => {
      if (err) {
          console.error("Database query error:", err);
          return res.json(err);
      }
      console.log("Database query success:", data);
      return res.json(data);
  });
});
app.get("/appointment_info", (req, res)=> {
  const q =
  `
    SELECT 
      p.first_name AS patient_first_name,
      p.last_name AS patient_last_name,
      pt.patient_id AS patient_id,
      d.doctor_id AS doctor_id,
      doc.first_name AS doctor_first_name,
      doc.last_name AS doctor_last_name,
      a.appointment_id
    FROM appointment a
      JOIN patient pt ON a.patient_id = pt.patient_id
      JOIN person p ON pt.user_id = p.user_id
      JOIN doctor d ON  a.doctor_id = d.doctor_id
      JOIN person doc ON d.user_id = doc.user_id;`
    db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/full_appointment_info", (req, res)=> {
  const q =
  `SELECT 
    a.appointment_id,
    d.doctor_id,
    doc.first_name AS doctor_first_name,
    doc.last_name AS doctor_last_name,
    p.patient_id,
    pat.first_name AS patient_first_name,
    pat.last_name AS patient_last_name,
    p.medical_history,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'symptom_id', s.symptom_id,
            'symptom_name', s.symptom_name
        )
    ) AS symptoms
  FROM appointment a
    JOIN doctor d ON a.doctor_id = d.doctor_id
    JOIN person doc ON d.user_id = doc.user_id
    JOIN patient p ON a.patient_id = p.patient_id
    JOIN person pat ON p.user_id = pat.user_id
    LEFT JOIN patient_symptom ps ON p.patient_id = ps.patient_id
    LEFT JOIN symptom s ON ps.symptom_id = s.symptom_id
    GROUP BY 
      a.appointment_id,
      d.doctor_id,
      p.patient_id;`
  db.query(q, (err,data)=> {
    if(err) return res.json(err)
    return res.json(data)
  })
})
app.get("/patient_records", (req, res) => {
  const q = 
  `
  SELECT 
    pe.first_name, 
    pe.last_name, 
    CONCAT(SUBSTRING(pe.phone_number, 1, 3), '-', SUBSTRING(pe.phone_number, 4, 3), '-', SUBSTRING(pe.phone_number, 7, 4)) AS phone_number,
    DATE_FORMAT(pe.date_of_birth, '%Y-%m-%d') AS date_of_birth,
    pe.age, 
    pe.street_address, 
    pe.state_address, 
    pe.zipcode_address, 
    p.patient_id, 
    p.SSN, 
    p.Gender, 
    p.insurance_id, 
    i.insurance_name, -- Included insurance_name
    CASE WHEN p.isInsured = 1 THEN 'Yes' ELSE 'No' END as isInsured, 
    p.severity_level, 
    CASE WHEN p.isVIP = 1 THEN 'Yes' ELSE 'No' END as isVIP, 
    p.medical_history
  FROM patient p
    JOIN person pe ON p.user_id = pe.user_id
    LEFT JOIN insurance i ON p.insurance_id = i.insurance_id;`
  db.query(q, (err, data) => {
      if (err) {
          console.error("Database query error:", err);
          return res.json(err);
      }
      console.log("Database query success:", data);
      return res.json(data);
  });
});


app.listen(8800, ()=>{
  console.log("Connected to backend!")
})