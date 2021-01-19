import React from 'react';
import Project from './Project';

const ListProject = () => {
    
    //Provando el flujo de datos con este array
    const projects = [
        {name: 'Web con Laravel'},
        {name: 'Administrador con React'},
        {name: 'MERN Stack'}
    ]
    
    return ( 
        <ul className="listado-proyectos">
            {projects.map(project =>(
                <Project 
                    project={project}
                />
            ))}
        </ul>

     );
}
 
export default ListProject;
