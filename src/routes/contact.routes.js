const express = require('express')
const { sendWelcomeMail } = require('../controllers/mailsControllores')

const contactRoutes = express.Router()

contactRoutes.post("/", sendWelcomeMail)

module.exports = contactRoutes