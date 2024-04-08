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


app.listen(8800, ()=>{
  console.log("Connected to backend!")
})