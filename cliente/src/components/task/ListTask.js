import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {
    
    const task = [
        {name: 'Agregar el front', estate: true },
        {name: 'Agregar el bakend', estate: true },
        {name: 'Testing app', estate: false },
        {name: 'Deploy', estate: false }
    ];
    
    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual </h2>

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
            >Eliminar Proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default ListTask;
