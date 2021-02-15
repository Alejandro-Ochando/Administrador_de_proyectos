import React, { useContext, useState } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const FormTask = () => {

    //Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Obtener la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { errortask, addTask, validateTask, getTasks } = tasksContext;

    //State del formulario
    const [task, saveTask ] = useState({
        name: ''
    })

    //Extraer el nombre del proyecto
    const { name } = task;

    //Si no hay proyecto seleccionado
    if(!project) return null;

    // Array destructuring para extraer el proyecto actual
    const [ projectCurrent ] = project;
    
    //Leer los valores del formulario
    const handlerChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(name.trim() === '') {
            validateTask();
            return;
        }

        // Agregar la nueva tarea al state de tareas
        task.projectId = projectCurrent.id;
        task.state = false;
        addTask(task);

        // Obtener y filtrar las tareas del proyecto actual
        getTasks(projectCurrent.id);

        // Reiniciar el form
        saveTask({
            name: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
                        value={name}
                        onChange={handlerChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
            {errortask ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
     );
}
 
export default FormTask;
