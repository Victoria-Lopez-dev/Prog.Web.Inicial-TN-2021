require('dotenv').config()
const transporter = require('../../config/nodemailer')

const sendWelcomeMail = (req,res) => {
    const {dataEmail}= req.body;
    let mailOptions = {
        from: process.env.EMAIL,
        to: dataEmail,
        subject: 'Bienvenido!!',
        text: 'Bienvenido al curso web inicial'
    }
    transporter.sendMail(mailOptions, (err, data)=>{
        if(err) {
            console.log(err)
        } else {
            console.log('Email enviado exitosamente')
        }
    })
    res.render('./pages/index.ejs')
}

module.exports = { sendWelcomeMail }