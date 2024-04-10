import mysql from "mysql"

export const db = mysql.createConnection({
    host: "hospitalmanagement.cz22gcaos4ot.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "Pollux1002!",
    database: "hdb"
})


