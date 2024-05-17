const express = require('express');
const { notificarAdministrador } = require('./notificador');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/notificar', async (req, res) => {
    const producto = req.query.producto;
    try {
        await notificarAdministrador(producto);
        res.send('Notificación enviada al administrador');
    } catch (error) {
        console.error("Error al enviar la notificación:", error);
        res.status(500).send('Error al enviar la notificación');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
