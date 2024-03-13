import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import loginImg from "../../../../public/images/login.png";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        actions.login(email, password, navigate);
    }

    function handleSignupClick() {
        navigate('/signup');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="row cardContainer">
                            <div className="col-6">
                                <div className="card-body">
                                    <div className="mb-5">
                                        <h1 className="text-center mt-5">¡Bienvenido de nuevo!</h1>
                                    </div>
                                    <form onSubmit={handleLoginSubmit}>
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-floating flex-fill mb-0">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="test@test.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">Tu correo electronico</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-floating flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        placeholder="Contraseña"
                                                        required
                                                    />
                                                    <label htmlFor="password" className="form-label">Tu contraseña</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mt-3 ms-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" name="remember_me" />
                                                <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                    Mantener sesión inciada
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col mt-4">
                                            <div className="d-grid">
                                                <button className="btn btnIniciarSesion" type="submit">Iniciar sesión</button>
                                            </div>
                                            <div className="d-grid mt-2">
                                                <a href="#!" className="btn btnGoogle">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                    </svg>
                                                    <span className="ms-2">Inicia sesión con Google</span>
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="d-flex gap-5 flex-row justify-content-center mt-4">
                                        <Link to="/signup" className="text-decoration-none linksContraseña">Crear una cuenta nueva</Link>
                                        <Link to="/forgotPassword" className="text-decoration-none linksContraseña">He olvidado mi contraseña </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className="w-100 h-100 object-fit-cover" loading="lazy" src={loginImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};