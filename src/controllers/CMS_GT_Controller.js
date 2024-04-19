const CMS_GT_Model = require('../models/CMS_GT');

// Obtener todos los registros de CMS_GT
const getAllCMS_GT = async (req, res) => {
    try {
        const CMS_GT = await CMS_GT_Model.findAll({ attributes: ['nombre', 'email'] });
        res.json(CMS_GT);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los registros de CMS_GT" });
    }
};

// Obtener solo un registro de CMS_GT por su NOMBRE
const getOneCMS_GTByName = async (req, res) => {
    try {
        const { nombre } = req.params;
        const CMS_GT = await CMS_GT_Model.findOne({ 
            where: { nombre }, 
            attributes: ['nombre', 'email'], 
            order: [['nombre', 'ASC']] // Ordenar por nombre ascendente
        });
        if (!CMS_GT) {
            return res.status(404).json({ message: "No se encontró ningún registro con el NOMBRE proporcionado" });
        }
        res.json(CMS_GT);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el registro de CMS_GT" });
    }
};

module.exports = {
    getAllCMS_GT,
    getOneCMS_GTByName
};
