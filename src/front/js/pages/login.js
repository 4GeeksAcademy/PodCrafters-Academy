import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { loginImg } from "../../../../public/images/login.jpeg";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginSubmit(e) {
        e.preventDefault();
        actions.login(email, password, navigate);
    }

    function handleSignupClick() {
        navigate('/signup');
    }

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form1Example13"
                                    className="form-control form-control-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Correo electronico"
                                    required
                                />
                            </div>

                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="form1Example23"
                                    className="form-control form-control-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                                <Link to="/forgotPassword">Forgot password?</Link>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src= { loginImg }
                            className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};