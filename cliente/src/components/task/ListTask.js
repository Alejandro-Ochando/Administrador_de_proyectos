import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';


const ListTask = () => {

    //Extraer proyectos de state inicial
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;
    
    //Si no hay proyecto seleccionado
    if(!project) return <h2>Selecciona un proyecto</h2>;

    //Array destructuring para extraer el proyecto actual
    const [projectCurrent] = project;

    const task = [
        {name: 'Agregar el front', estate: true },
        {name: 'Agregar el bakend', estate: true },
        {name: 'Testing app', estate: false },
        {name: 'Deploy', estate: false }
    ];

    //Elimina un proyecto
    const onClickDelete = () => {
        deleteProject(projectCurrent.id);
    }
    
    return ( 
        <Fragment>
            <h2>Proyecto: {projectCurrent.name} </h2>

            <ul className="listado-tareas">
                {task.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : task.map(task =>(
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
