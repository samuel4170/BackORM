const express = require('express');
const app = express();
const db = require('./db/database');
const CMS_GT_Routes = require('./routes/cmsgt');

// Conectar a la base de datos
db.authenticate()
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch(error => {
        console.error("Error al conectar a la base de datos:", error);
    });

// Middleware
app.use(express.json());

// Rutas
app.use('/CMSGT', CMS_GT_Routes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
