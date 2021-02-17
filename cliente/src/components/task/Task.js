import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const Task = ({task}) => {

    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // obtener la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, changeStateTask, saveTaskCurrent } = tasksContext;

    // Extraer el proyecto
    const [ projectCurrent ] = project;
    

    // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const taskDelete = id => {
        deleteTask(id);
        getTasks(projectCurrent.id);
    }

    // Función que modifica el estado de las tareas
    const changeState = task => {
        task.state ? task.state = false : task.state = true;
        changeStateTask(task);
    }

    // Agregar tarea cuando el usuario quiera editar
    const selectTask = task => {
        saveTaskCurrent(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>

            <div className="estado">
                {task.state
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => changeState(task)}
                        >
                            Completo
                        </button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => changeState(task)}
                        >
                            Incompleto
                        </button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTask(task)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => taskDelete(task.id) }
                >Eliminar</button>
            </div>
        </li>
    );
}
 
export default Task;
