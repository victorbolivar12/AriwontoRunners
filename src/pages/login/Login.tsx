import React, { FunctionComponent, useState } from 'react';
import './login.css'
import logo from './../../assets/logo.png';
import axios from 'axios';
 
interface user {
    username: string
    password: string
}

export const Login: FunctionComponent = () => {

    const [user, setUser] = useState<user>({
        username: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/login', user)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <div className="form_container">
                <div className="form_card">
                    <div className="card_left">
                        <img src={logo} alt="Logo Ariwonto" style={{ maxWidth: "80%", maxHeight: "80%" }} />
                    </div>
                    <div className="card_right">
                        <samp style={{ fontSize: '25px' }}>Iniciar Seccion</samp>
                        <form className='form' onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name='username'
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">Nunca compartiremos tu informacion con nadie más.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='password'
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '25%' }}>Enviar</button>
                        </form>
                    </div>
                </div>
                <p style={{ position: 'relative', top: '47%' }}>
                    Copyright © 2023 Club Ariwonto Runners. Todos los derechos reservados.
                </p>
            </div>
        </>
    );
};

