import mysql from "mysql2/promise";
import 'dotenv/config.js'

let pool;

try {
 pool = mysql.createPool({
     host: 'localhost',
     user: 'root',
     database: 'Inventory_Management_System',
     password: process.env.Db_Password,
     waitForConnections: true,
     connectionLimit: 40,
     queueLimit: 0,
     idleTimeout: 60000, 
     queueLimit: 0,
     enableKeepAlive: true,
     keepAliveInitialDelay: 0,
 })
} catch (error) {
    console.log(error)
}

export default pool;