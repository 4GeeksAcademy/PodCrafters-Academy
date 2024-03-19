import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/recuperarPassword.css";

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
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h1 >He olvidado mi contraseña</h1>
                            <form onSubmit={handleLoginSubmit} className="login-form">
                                <div className="form-group mb-2 col-5">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        id="email"
                                        placeholder="Correo electrónico"
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
