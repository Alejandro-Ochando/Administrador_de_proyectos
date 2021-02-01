import React, { useReducer } from 'react';
import TaskContext from '../task/taskContext';
import TaskReducer from '../task/taskReducer';

const TaskState = props => {
    const initialState = {
        tasks: [],
    }

    //Crear dispatch y state
    const [ state, dispatch ] = useReducer(TaskReducer, initialState)

    return (
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
        )
}

export default TaskState;
