import express from "express"
import mysql from "mysql"
import cors from "cors";
import bcrypt from 'bcrypt';
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

const generateID = (role) => {
  const timestamp = new Date().getTime();
  return `${role.slice(0, 3)}-${timestamp}`;
};


app.post("/signup", (req, res) => {
  const {
    firstname,
    lastname,
    email,
    username,
    password,
    street,
    state,
    zip,
    phone,
    age,
    userRole,
    dob
  } = req.body;
  console.log("Received signup request:", req.body);
  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, (err, hash) => { // Hash the password
      console.log(`Hash: ${hash}`);
    if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json("Error hashing password");
    }
    const q = `INSERT INTO person (username, user_password, user_role, email, first_name, last_name, phone_number, date_of_birth, age, street_address, state_address, zipcode_address) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [username, hash, userRole, email, firstname, lastname, phone, dob, age, street, state, zip];
  // First, insert the user data into the person table
  db.query(q, values, (err,result) => {
    
      if (err) {
        console.error("Failed to insert into database", err);
        return res.status(500).json({ error: "Error registering user" });
      }
      
      // Retrieve the user_id of the newly inserted user
      const userId = result.insertId;
      const uniqueId = generateID(userRole);

      // Insert the user_id into the appropriate role table based on userRole
      let roleIdColumn, roleTable;
      switch (userRole) {
        case 'Patient':
          roleIdColumn = 'patient_id';
          roleTable = 'patient';
          break;
        case 'Doctor':
          roleIdColumn = 'doctor_id';
          roleTable = 'doctor';
          break;
        case 'Receptionist':
          roleIdColumn = 'receptionist_id';
          roleTable = 'receptionist';
          break;
        default:
          return res.status(400).json({ error: 'Invalid user role' });
      }


      db.query(
        `INSERT INTO ${roleTable} (user_id, ${roleIdColumn}) VALUES (?, ?)`,
        [userId, uniqueId],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error registering user role" });
          }
          return res.status(200).json({ message: "User registered successfully" });
        });
    });
  });
});
app.post('/login', (req,res) => {
  const { email, password } = req.body;
  console.log("Received login request:", req.body);
  const q = "SELECT user_id, email, user_password, user_role FROM person WHERE email = ?";
  db.query(q, [email], (err, data) =>{
      if (err){
          console.error("Error executing query:", err);
          return res.status(500).json("Error executing query");
      }
      if (data.length > 0){
          const hashedPassword = data[0].user_password;
          console.log("Retrieved hashed password:", hashedPassword);
          console.log("Input password:", password);
          bcrypt.compare(password.toString(), hashedPassword, (err, result) => { // Ensure password is a string
              if (err) {
                  console.error("Error comparing passwords:", err);
                  return res.status(500).json("Error comparing passwords");
              }
              console.log("Comparison result:", result);
              // based on login
              const user =data[0]
              if (result) {
                   // Get the user_id from the data
                  let roleQuery= "";
                  //look at the user_role data
                  switch(user.user_role) {
                      case 'Patient':
                          roleQuery = "SELECT patient_id FROM patient WHERE user_id = ?";
                          break;
                      case 'Doctor':
                          roleQuery = "SELECT doctor_id FROM doctor WHERE user_id = ?";
                          break;
                      case 'Receptionist':
                          roleQuery = "SELECT receptionist_id FROM receptionist WHERE user_id = ?";
                          break;
                  } 
                    if (roleQuery) {
                      // look for the array of users
                      db.query(roleQuery, [user.user_id], (err, dataRole) => {
                        if(err || dataRole.length === 0){
                          return res.status(500).json("Error finding role ID");
                        } else {
                          // since patient, doctor, and receptionist are upper case
                          const lc_user_role = user.user_role.toLowerCase(); 
                          const roleIDType = `${lc_user_role}_id`;
                          // user_id and role_id 
                          const findRoleID = dataRole[0][roleIDType];
                          console.log(roleIDType);

                          return res.json({status: "Success", user_id:user.user_id, user_role: user.user_role,[roleIDType]: findRoleID })
                        }
                      });
                    }else {
                      return res.status(400).json("invalid user role");
                    }
                  
              } else {
                  return res.json({ status: "Fail" });
              }
              
          });
      } else {
          return res.json("Fail");
      }
  });
});


app.listen(8800, ()=>{
  console.log("Connected to backend!")
})