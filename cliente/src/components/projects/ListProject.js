import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProject = () => {

    //Extraer proyectos de state incial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
    }, []);

    //Revisar si hay contenidos
    if(projects.length === 0 ) return null;

    return ( 
        <ul className="listado-proyectos">
            {projects.map(project =>(
                <Project 
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>

     );
}
 
export default ListProject;
