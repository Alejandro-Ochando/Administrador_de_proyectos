import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT, 
    GET_PROJECTS 
} from '../../types';


const ProjectState =  props => {

    const projects = [
        {id: 1, name: 'Web con Laravel' },
        {id: 2, name: 'Administrador con React' },
        {id: 3, name: 'MERN Stack' }
    ]

    const initialState = {
        projects : [],
        form: false
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


    return(

        <projectContext.Provider
            value={{
                projects: state.projects, 
                form: state.form,
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;
