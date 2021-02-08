import { 
    ADD_TASK,
    TASK_PROJECT,
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                tasksproject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK    :
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            
        default:
            return state;
    }
}