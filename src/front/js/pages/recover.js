import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import "../../styles/login.css";

export const Recover = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        let token = searchParams.get('token')
        if (password !== repeatPassword) alert('Contraseñas no coinciden')
        actions.resetPassword(token, password)
    }

    return (
        <div className="container">
            <h1 className="login-title">Recupera contraseña Prueba</h1>
            <div className="login">
                <div className="login-container">
                    <form onSubmit={handleLoginSubmit} className="login-form">

                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                id="passwordrecover"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label">Repite Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                className="login-input"
                                id="passwordrecoverrepeat"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>

                </div>
            </div>
        </div>
    );
};
