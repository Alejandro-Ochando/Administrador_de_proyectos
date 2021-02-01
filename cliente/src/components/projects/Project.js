import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const Project = ({project}) => {

    //Obtener el state del proyectos
    const projectsContext = useContext(projectContext);
    const { projectCurrent } = projectsContext;

    //Obtener la funcion del context de tarea
    const tasksContext = useContext(taskContext);
    const { getTasks } = tasksContext;

    //Funcion para agregar el proyecto actual
    const selectProject = id => {
        projectCurrent(id); //Fijar un proyecto actuaL
        getTasks(id); //Filtrar tareas cuando se de click
    }


    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project.id) }
            >{project.name}</button>
        </li>
      );
}
 
export default Project;
