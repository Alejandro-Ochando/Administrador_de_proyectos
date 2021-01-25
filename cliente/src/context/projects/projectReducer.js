import { 
    ADD_PROJECT, 
    FORM_PROJECT, 
    GET_PROJECTS,
    VALIDATE_FORM,
    PROJECT_CURRENT
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                errorform: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                errorform: true
            }
        case PROJECT_CURRENT:
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)
            }        


        default:
            return state;
    }
}