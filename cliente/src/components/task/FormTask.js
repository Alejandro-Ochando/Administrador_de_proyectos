import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    //Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Si no hay proyecto seleccionado
    if(!project) return null;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="name"
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
        </div>
     );
}
 
export default FormTask;
