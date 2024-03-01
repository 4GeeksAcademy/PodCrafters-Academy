import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#E2F4F4" }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://raw.githubusercontent.com/4GeeksAcademy/PodCrafters-Academy/26da7e58178507f3f07f6acd7b1bc9a6082dd9bf/_0fd8546c-634c-4803-9f7b-78b166b7b7bb.jpg" alt="Logo" height="100" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "#000", background: "#E5E5E5", borderRadius: "5px", padding: "5px 10px", margin: "0 5px"  }}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "#000", background: "#E5E5E5", borderRadius: "5px", padding: "5px 10px", margin: "0 5px"  }}>Log In / Registrar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "#000", background: "#E5E5E5", borderRadius: "5px", padding: "5px 10px", margin: "0 5px" }}>Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: "#000", background: "#E5E5E5", borderRadius: "5px", padding: "5px 10px", margin: "0 5px"  }}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
