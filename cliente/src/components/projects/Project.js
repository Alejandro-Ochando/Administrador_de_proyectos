import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({project}) => {

    //Obtener el state del proyectos
    const projectsContext = useContext(projectContext);
    const { projectCurrent } = projectsContext;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => projectCurrent(project.id) }
            >{project.name}</button>
        </li>
      );
}
 
export default Project;
