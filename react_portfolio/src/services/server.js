const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_DESTINATION,
        pass: process.env.EMAIL_PASSWORD
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    const emailDestination = process.env.EMAIL_DESTINATION;

    console.log(`Nom: ${name}, Email: ${email}, Message: ${message}`);
    console.log(`E-mail de destination : ${emailDestination}`);

    const mailOptions = {
        from: process.env.EMAIL,
        to: emailDestination,
        subject: 'Nouveau message depuis votre portfolio',
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé avec succès');
        return res.status(200).json({ message: 'E-mail envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
