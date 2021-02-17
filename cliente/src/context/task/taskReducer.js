import { 
    ADD_TASK,
    DELETE_TASK,
    TASK_PROJECT,
    VALIDATE_TASK,
} from '../../types/index';

export default (state, action) => {
    switch(action.type) {
        case TASK_PROJECT:
            return {
                ...state,
                tasksproject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                errortask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }     
            
        default:
            return state;
    }
}