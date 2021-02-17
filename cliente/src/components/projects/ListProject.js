import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProject = () => {

    //Extraer proyectos de state incial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        getProjects();
        //eslint-disable-next-line
    }, []);

    //Revisar si hay contenidos
    if(projects.length === 0 ) return <p>No hay proyectos, comienza creando uno.</p>;

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project =>(
                    <CSSTransition
                        key={project.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Project 
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>

     );
}
 
export default ListProject;
