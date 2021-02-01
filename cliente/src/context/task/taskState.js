import React, { useReducer } from 'react';
import taskContext from '../task/taskContext';
import TaskReducer from '../task/taskReducer';

import { 
    TASK_PROJECT 
} from '../../types/index';
import Project from '../../components/projects/Project';

const TaskState = props => {
    const initialState = {
        tasks: [
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el bakend', estate: true, projectId: 2 },
            {name: 'Testing app', estate: false, projectId: 3 },
            {name: 'Deploy', estate: false, projectId: 4 },
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el bakend', estate: true, projectId: 2 },
            {name: 'Testing app', estate: false, projectId: 3 },
            {name: 'Deploy', estate: false, projectId: 4 }
        ],
    }

    //Crear dispatch y state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    //Crear las funciones

    // Obtener las tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                getTasks
            }}
        >
            {props.children}
        </taskContext.Provider>
        )
}

export default TaskState;
