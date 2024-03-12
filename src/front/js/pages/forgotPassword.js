import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/login.css";

export const ForgotPassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        actions.sendResetPasswordEmail(email);
    }

    return (
        <div className="container">
            <h1 className="login-title">He olvidado mi contraseña</h1>
            <div className="login">
                <div className="login-container">
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                                id="email"
                                placeholder="Correo electrónico"
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