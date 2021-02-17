import React, { useReducer } from 'react';
import taskContext from '../task/taskContext';
import TaskReducer from '../task/taskReducer';

import { 
    TASK_PROJECT,
    ADD_TASK,
    VALIDATE_TASK, 
    DELETE_TASK
} from '../../types/index';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 0, name: 'Agregar el front', estate: true, projectId: 1 },
            { id: 1, name: 'Agregar el front', estate: true, projectId: 1 },
            { id: 2, name: 'Agregar el bakend', estate: true, projectId: 2 },
            { id: 3, name: 'Testing app', estate: false, projectId: 3 },
            { id: 4, name: 'Deploy', estate: false, projectId: 4 },
            { id: 5, name: 'Agregar el front', estate: true, projectId: 1 },
            { id: 6, name: 'Agregar el front', estate: true, projectId: 1 },
            { id: 7, name: 'Agregar el bakend', estate: true, projectId: 2 },
            { id: 8, name: 'Testing app', estate: false, projectId: 3 },
            { id: 9, name: 'Deploy', estate: false, projectId: 4 }
        ],
        tasksproject: null,
        errortask: false
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

    // Valida y muestra un error 
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    // Eliminar tarea por Id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                getTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </taskContext.Provider>
        )
}

export default TaskState;
