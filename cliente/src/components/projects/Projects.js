import React from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../task/FormTask';

const Projects = () => {
    return ( 

        <div className="contenedor-app">
            
            <Sidebar />

            <div className="seccion-principal">

                <Bar />
                
                <main>

                    <FormTask />

                    <div className="contenedor-tareas">
                        <h3>Aqui muestro las tareas</h3>
                    </div>

                </main>
                
            </div>
            
        </div>

     );
}
 
export default Projects;