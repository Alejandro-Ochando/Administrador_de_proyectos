import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState =  props => {
    const initialState = {
        formulario: false
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch] = useReducer(projectReducer, initialState);

    //Funciones para el CRUD

    return(

        <projectContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;
