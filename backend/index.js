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


app.post("/signup", (req, res) => {
  const {
    firstname,
    lastname,
    email,
    username,
    pass,
    street,
    state,
    zip,
    phone,
    age,
    userRole,
    dob
  } = req.body;

  // Insert the user data into the person table
  db.query(
    `INSERT INTO person (username, user_password, user_role, email, first_name, last_name, phone_number, date_of_birth, age, street_address, state_address, zipcode_address) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [username, pass, userRole, email, firstname, lastname, phone, dob, age, street, state, zip],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error registering user" });
      }
      return res.status(200).json({ message: "User registered successfully" });
    }
  );
});

app.listen(8800, ()=>{
  console.log("Connected to backend!")
})