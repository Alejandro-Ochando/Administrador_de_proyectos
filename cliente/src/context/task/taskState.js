import React, { useReducer } from 'react';
import taskContext from '../task/taskContext';
import TaskReducer from '../task/taskReducer';

import { 
    TASK_PROJECT,
    ADD_TASK 
} from '../../types/index';

const TaskState = props => {
    const initialState = {
        tasks: [
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el bakend', estate: true, projectId: 2 },
            {name: 'Testing app', estate: false, projectId: 3 },
            {name: 'Deploy', estate: false, projectId: 4 },
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el front', estate: true, projectId: 1 },
            {name: 'Agregar el bakend', estate: true, projectId: 2 },
            {name: 'Testing app', estate: false, projectId: 3 },
            {name: 'Deploy', estate: false, projectId: 4 }
        ],
        tasksproject: null
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

    // Agregar una tarea al proyecto seleccionado
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                getTasks,
                addTask
            }}
        >
            {props.children}
        </taskContext.Provider>
        )
}

export default TaskState;
