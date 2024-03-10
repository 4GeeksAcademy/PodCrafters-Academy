import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [telephone, setTelephone] = useState();
    const [userName, setUsername] = useState();

    function handleSignupSubmit(e) {
        e.preventDefault();
        actions.signup(email, password, userName, firstName, lastName, telephone, navigate);
    }
    return (
        <div className="text-center mt-5">
            <h1>Registro</h1>
            <form onSubmit={handleSignupSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">FirstName</label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} className="form-control" id="firstName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">LastName</label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} className="form-control" id="lastName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">UserName</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="userName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="telephone" className="form-label">Telefono</label>
                    <input type="text" onChange={(e) => setTelephone(e.target.value)} className="form-control" id="telephone" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};