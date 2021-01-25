import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM 
} from '../../types';


const ProjectState =  props => {

    const projects = [
        {id: 1, name: 'Web con Laravel' },
        {id: 2, name: 'Administrador con React' },
        {id: 3, name: 'MERN Stack' }
    ]

    const initialState = {
        projects : [],
        form: false,
        errorform: false
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch] = useReducer(projectReducer, initialState);

    //Funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //Obtener los proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        }) 
    }

    //Agregar nuevo proyecto
    const addProject = project => {
        // Añade id al poryecto en NewProject
        project.id = uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Valida el formulario por error
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }


    return(

        <projectContext.Provider
            value={{
                projects: state.projects, 
                form: state.form,
                errorform: state.errorform,
                showForm,
                getProjects,
                addProject,
                showError
            }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;
