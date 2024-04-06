import express from "express"
import mysql from "mysql"
const app = express()

const db = mysql.createConnection({
  host:"hospitalmanagement.cz22gcaos4ot.us-east-2.rds.amazonaws.com",
  user:"root",
  password:"Pollux1002!",
  database:"hdb"

})

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

app.listen(8800, ()=>{
  console.log("Connected to backend!")
})