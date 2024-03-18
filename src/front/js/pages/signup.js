import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import signupImg from "../../../../public/images/signup.png";


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
        <div className="d-flex container justify-content-center ">
            <div className="card signupContainer">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center mb-5 mt-5">¡Unete a nuestra comunidad!</h1>
                        <form className="" onSubmit={handleSignupSubmit}>
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Correo Electronico"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="email" className="form-label">Tu correo electronico</label>
                                </div>
                            </div>
                            {/* 
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                        onChange={(e) => setFirstname(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="firstName" className="form-label">Nombre</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i class="fas fa-headset fa-lg me-3 fa-fw"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                        onChange={(e) => setLastname(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="lastName" className="form-label">Apellidos</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i class="fas fa-circle-user fa-lg me-3 fa-fw fa-circle-user"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        placeholder="Username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="userName" className="form-label">Nombre de usuario</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i class="fas fa-mobile-screen fa-lg me-3 fa-fw  "></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="telephone"
                                        placeholder="Telephone"
                                        onChange={(e) => setTelephone(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="telephone" className="form-label">Teléfono</label>
                                </div>
                            </div>*/}
                            <div className="d-flex flex-row align-items-center mb-2">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            calculatePasswordStrength(e.target.value);
                                        }}
                                        required
                                    />
                                    <label htmlFor="password" className="form-label">Tu contraseña</label>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div className="form-floating flex-fill mb-0">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="confirmPassword" className="form-label">Confirma tu contraseña</label>
                                </div>
                            </div>
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" id="form2Example3c" required />
                                <label className="form-check-label" htmlFor="form2Example3c">
                                    Acepto los <a href="#!">terminos y condiciones</a>
                                </label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btnRegistrar" disabled={loading}>
                                    {loading ? 'Loading...' : '¡Inicia tu viaje con nosotros!'}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col d-flex align-items-center">
                        <img src={signupImg}
                            className="img-fluid" />
                    </div>
                </div>
            </div >
        </div >
    );
};