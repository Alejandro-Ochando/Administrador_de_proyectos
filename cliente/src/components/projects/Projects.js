import React from 'react';
import Sidebar from '../layout/Sidebar';

const Projects = () => {
    return ( 

        <div className="contenedor-app">
            
            <Sidebar />
            
            <div className="seccion-principal">
                <main>
                    <div className="contenedor-tareas">
                        <h3>Aqui muestro las tareas</h3>
                    </div>
                </main>
            </div>
            
        </div>

     );
}
 
export default Projects;