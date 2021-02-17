import React, { useReducer } from 'react';
import taskContext from '../task/taskContext';
import TaskReducer from '../task/taskReducer';

import { 
    TASK_PROJECT,
    ADD_TASK,
    VALIDATE_TASK, 
    DELETE_TASK,
    STATE_TASK,
    TASK_CURRENT,
    UPDATE_TASK
} from '../../types/index';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 0, name: 'Agregar el front', state: true, projectId: 1 },
            { id: 1, name: 'Agregar el front', state: true, projectId: 1 },
            { id: 2, name: 'Agregar el bakend', state: true, projectId: 2 },
            { id: 3, name: 'Testing app', state: false, projectId: 3 },
            { id: 4, name: 'Deploy', state: false, projectId: 4 },
            { id: 5, name: 'Agregar el front', state: true, projectId: 1 },
            { id: 6, name: 'Agregar el front', state: true, projectId: 1 },
            { id: 7, name: 'Agregar el bakend', state: true, projectId: 2 },
            { id: 8, name: 'Testing app', state: false, projectId: 3 },
            { id: 9, name: 'Deploy', state: false, projectId: 4 }
        ],
        tasksproject: null,
        errortask: false,
        taskselect: null
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

    // Cambia el estado de cada tarea 
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task

        })
    }

    // Extrae una tarea para edición
    const saveTaskCurrent = task => {
        dispatch({
            type: TASK_CURRENT,
            payload: task
        })
    }

    // Edita o modifica una tarea
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    //Elimina la tarea seleccionada
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <taskContext.Provider
            value={{
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                taskselect: state.taskselect,
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask,
                saveTaskCurrent,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </taskContext.Provider>
        )
}

export default TaskState;
