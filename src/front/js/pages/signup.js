import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css";

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [userName, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const calculatePasswordStrength = (value) => {
        const strength = value.length >= 8 ? 1 : 0;
        setPasswordStrength(strength);
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await actions.signup(email, password, userName, firstName, lastName, telephone, navigate);
        setLoading(false);
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <form onSubmit={handleSignupSubmit} className="signup-form col">
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
                            onChange={(e) => {
                                setPassword(e.target.value);
                                calculatePasswordStrength(e.target.value);
                            }}
                            className="signup-input"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <progress
                            value={passwordStrength}
                            max="1"
                            className="password-strength-meter"
                        ></progress>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="signup-input"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <button type="submit" className="signup-submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign Up'}
                    </button>
                </form>

            </div>
        </div>
    );
};
