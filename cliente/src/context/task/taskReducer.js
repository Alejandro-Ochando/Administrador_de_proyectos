import { 
    ADD_TASK,
    DELETE_TASK,
    STATE_TASK,
    TASK_CURRENT,
    TASK_PROJECT,
    UPDATE_TASK,
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
                tasks: [action.payload,...state.tasks ],
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
        case UPDATE_TASK:    
        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task )
            }
        case TASK_CURRENT:
            return {
                ...state,
                taskselect: action.payload
            }             
            
        default:
            return state;
    }
}