import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
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
        <div className="login-container">
            <h1 className="login-title">Inicia Sesión</h1>
            <form onSubmit={handleLoginSubmit} className="login-form">
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        id="email"
                        placeholder="Email address"
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
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="login-submit">Login</button>
            </form>
            <a href="#" className="forgot-password">Forgot password?</a>
        </div>
    );
};
