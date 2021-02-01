import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';


const ListTask = () => {

    //Extraer proyectos de state inicial
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    // Extraer las tareas del proyecto
    const tasksContext = useContext(taskContext);
    const { tasksproject } = tasksContext;
    
    //Si no hay proyecto seleccionado
    if(!project) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [projectCurrent] = project;

    //Elimina un proyecto
    const onClickDelete = () => {
        deleteProject(projectCurrent.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {projectCurrent.name} </h2>

            <ul className="listado-tareas">
                {tasksproject.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tasksproject.map(task =>(
                        <Task 
                            task={task}
                        />
                    ))}
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickDelete}
            >Eliminar Proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListTask;
