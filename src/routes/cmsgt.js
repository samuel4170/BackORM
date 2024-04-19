const express = require('express');
const router = express.Router();
const CMS_GT_Controller = require('../controllers/CMS_GT_Controller');

// Ruta para obtener todos los registros de CMS_GT
router.get("/", CMS_GT_Controller.getAllCMS_GT);

// Ruta para obtener un registro de CMS_GT por su nombre
router.get('/:nombre', CMS_GT_Controller.getOneCMS_GTByName);

module.exports = router;
