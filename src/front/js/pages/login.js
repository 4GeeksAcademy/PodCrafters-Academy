import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "../../styles/login.css"; // Updated CSS file import

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLoginSubmit(e) {
        e.preventDefault();
        actions.login(email, password, navigate);
    }

    return (
        <div className="container">
            <h1 className="login-title">Inicia Sesión</h1>
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
                                placeholder="Correo electronico"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                id="password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button type="submit" className="login-submit">Login</button>
                        <a href="#" className="forgot-password">¿Has olvidado tu contraseña?</a>

                    </form>

                </div>
                <div className="signupContainer">
                    <h1 className="signup-title">Regístrate</h1>
                    <p>Si todavía no tienes una cuenta, puedes <Link to="/signup" className="signup-link">registrarte aquí</Link>.</p>
                </div>
            </div>
        </div>
    );
};