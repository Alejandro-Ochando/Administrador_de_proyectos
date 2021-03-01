const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

//Crea proyectos
//api/projects
router.post('/', projectController.createProject);

module.exports = router;