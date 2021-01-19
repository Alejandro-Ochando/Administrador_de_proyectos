import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {
    
    const task = [
        
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
        </Fragment>
        

     );
}
 
export default ListTask;
