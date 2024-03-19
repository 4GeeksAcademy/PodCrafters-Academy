import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import "../../styles/recuperarPassword.css";

export const Recover = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        let token = searchParams.get('token');
        if (password !== repeatPassword) alert('Contraseñas no coinciden');
        actions.resetPassword(token, password);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="login-title">Recupera contraseña </h1>
                            <form onSubmit={handleLoginSubmit} className="login-form">
                                <div className="form-group mb-3 col-5">
                                    <label htmlFor="passwordrecover" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control "
                                        id="passwordrecover"
                                        placeholder="Contraseña"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3 col-5">
                                    <label htmlFor="passwordrecoverrepeat" className="form-label">Repite Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                        className="form-control"
                                        id="passwordrecoverrepeat"
                                        placeholder="Contraseña"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btnEnviar btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
