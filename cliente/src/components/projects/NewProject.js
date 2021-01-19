import React, { Fragment, useState } from 'react';

const NewProject = () => {
    
    //State para el Project
    const [project, saveProject ] = useState({
        name: ''
    });


    //Extrayendo project del State
    const { name } = project;

    //Lee los contenidos del input
    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario envia el proyecto
    const handlerSend = e => {
        e.preventDefault();

        //Validacion

        //Agregar al State

        //Reiniciar el form
    }
    
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            > Nuevo Proyecto </button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={handlerSend}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="name"
                    value={name}
                    onChange={onChangeProject}
                />

                <input
                    type="submit"
                    className=" btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
        </Fragment>
        

     );
}
 
export default NewProject;