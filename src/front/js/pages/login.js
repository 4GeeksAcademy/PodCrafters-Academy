import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

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
        <div className="container text-center mt-5">
            <h1>Inicia Sesión</h1>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder="Enter password" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" aria-label="Check me out" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};