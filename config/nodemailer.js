require('dotenv').config()
const nodemailer = require('nodemailer')

// Paso 1: Configurar el transportador
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

// Paso 2: Configurar el cuerpo del mail
// [Podemos armar el cuerpo del mail dentro de los controladores]
// let mailOptions = {
//     from: 'nuestroMailCorporativo@gmail.com',
//     to: 'aQuienEnviamosElMail@correo.com',
//     subject: 'Asunto del mail',
//     text: 'Cuerpo del mail'
// }

// Paso 3: Enviar email (Ejecutamos la logica desde los controladores)
// transporter.sendMail(mailOptions, (err, data)=>{
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('Email enviado exitosamente')
//     }
// })

// Configuraciones extras en Gmail
// 1) Entrar en:
// myaccount.google.com/lesssecureapps

// 2) Seleccionar la cuenta que vamos a usar para enviar los emails

// 3) Habilitar la configuracion de apps menos seguras: ON

//Paso 4: Exportar el transporter
module.exports = transporter