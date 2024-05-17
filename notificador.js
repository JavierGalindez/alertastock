const nodemailer = require('nodemailer');
require('dotenv').config();

async function notificarAdministrador(producto) {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'Producto agotado en la tienda online',
            text: `El producto ${producto} está agotado en la tienda online.`
        });

        console.log('Correo enviado: %s', info.messageId);
    } catch (error) {
        throw error;
    }
}

module.exports = { notificarAdministrador };
