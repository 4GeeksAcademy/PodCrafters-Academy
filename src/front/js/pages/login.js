import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [firstName, setFirstname] = useState()
    const [lastName, setLastname] = useState()
    const [telefono, setTelefono] = useState()
    const [userName, setUsername] = useState()
    function handleLoginSubmit(e) {
        e.preventDefault();
        actions.login(email, password, navigate);
    }
    
    function handleSignupSubmit(e) {
        e.preventDefault();
        actions.signup(email, password, firstName, lastName, telefono, userName, navigate);
    }

    return (
        <div className="text-center mt-5">
            <h1>Inicia Sesión</h1>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="text-center mt-5">
                <h1>Registro</h1>
                <form onSubmit={handleSignupSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">FirstName</label>
                        <input type="text" onChange={(e) => setFirstname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">LastName</label>
                        <input type="text" onChange={(e) => setLastname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">UserName</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Telefono</label>
                        <input type="text" onChange={(e) => setTelefono(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};