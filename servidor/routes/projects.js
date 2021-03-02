const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crea proyectos
//api/projects
router.post('/', 
    auth,
    [
        check('name', 'El nombre del proyecto es obligatorio')
            .not()
            .isEmpty()
    ],
    projectController.createProject
);

//Obtener todos los proyectos
router.get('/',
    auth,
    projectController.getProjects
);

//Actualizar el proyecto
router.put('/:id',
    auth,
    [
        check('name', 'El nombre del proyecto es obligatorio')
            .not()
            .isEmpty()
    ],
    projectController.updateProject
);

//Eliminar un proyecto
router.delete('/:id',
    auth,
    projectController.deleteProject
);

module.exports = router;
