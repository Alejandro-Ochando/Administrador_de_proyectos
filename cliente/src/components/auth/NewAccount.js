import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    
    //State para el inicio de sesión
    const [ user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        repeatpassword: ''
    });

    //Extraemos el usuario
    const { name, email, password, repeatpassword } = user;

    const onChange = e => {
       saveUser({
           ...user,
            [e.target.name] : e.target.value
       })
    }

    //Iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validación sin campos vacios

        // Password de 6 caracteres

        // Las 2 password iguales

        //Pasarlo al action
    }
    
    return ( 
        
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
               
                <form>
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name" //Mismo nombre para el objeto del State
                            placeholder="Tu Nombre"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@live.com"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Clave</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="repeatpassword">Confirmar Clave</label>
                        <input
                            type="password"
                            id="repeatpassword"
                            name="repeatpassword"
                            placeholder="Repite tu Password"
                            value={repeatpassword}
                            onChange={onChange}
                        />
                    </div>
                    
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a Inciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount;