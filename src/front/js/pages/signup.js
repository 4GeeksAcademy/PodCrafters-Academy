import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css"; // Assuming you have a separate CSS file for styles

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [userName, setUsername] = useState('');

    function handleSignupSubmit(e) {
        e.preventDefault();
        actions.signup(email, password, firstName, lastName, telephone, userName, navigate);
    }

    return (
        <div className="signup-container">
            <h1 className="signup-title">Registro</h1>
            <form onSubmit={handleSignupSubmit} className="signup-form">
                <div className="form-group">
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-input"
                        id="email"
                        placeholder="Email address"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        onChange={(e) => setFirstname(e.target.value)}
                        className="signup-input"
                        id="firstName"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        onChange={(e) => setLastname(e.target.value)}
                        className="signup-input"
                        id="lastName"
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        className="signup-input"
                        id="userName"
                        placeholder="Username"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        onChange={(e) => setTelephone(e.target.value)}
                        className="signup-input"
                        id="telephone"
                        placeholder="Telephone"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-input"
                        id="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="signup-submit">Submit</button>
            </form>
        </div>
    );
};
