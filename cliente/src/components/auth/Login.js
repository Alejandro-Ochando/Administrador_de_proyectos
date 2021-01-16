import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    //State para el inicio de sesión
    const [ user, saveUser] = useState({
        email: '',
        password: ''
    });

    //Extraemos el usuario
    const { email, password } = user;

    const onChange = e => {
       saveUser({
           ...user,
            [e.target.name] : e.target.value
       })
    }

    //Iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validación

        //Pasarlo al action
    }
    
    return ( 
        
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
               
                <form>
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    Crear una cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;