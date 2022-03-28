const mysql = require('mysql2')

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'WebLunMie',
 
})

databaseConnection.connect((error)=>{
  if(error) {
    console.log(error)
  } else {
    console.log('Servidor conectado a MySQL')
  }
})

module.exports = databaseConnection