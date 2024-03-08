import React, { useState } from "react";
import "../../styles/login.css";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className="login">
            <div className="container">
                <h2 className="login-title">Entra en tu cuenta</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <label htmlFor="username" className="login-label">Usuario:</label>
                    <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} className="login-input" />
                    <label htmlFor="password" className="login-label">Contraseña</label>
                    <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="login-input" />
                    <input type="submit" value="Entrar" className="login-submit" />
                    <a href="#" className="forgot-password">¿Has olvidado tu contraseña?</a>
                </form>
            </div>
        </div >
    );
}