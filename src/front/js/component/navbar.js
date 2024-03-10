import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/images/Logo.png';
import { Context } from '../store/appContext';
import '../../styles/navbar.css';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logoContainer">
                    <Link to="/">
                        <img className="imgLogo" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navItems">
                    {store.user ? (
                        // Mostrar botón de cierre de sesión si hay un usuario autenticado
                        <>
                            <button className="btn btnLogout" onClick={actions.logout}>
                                Cerrar sesión
                            </button>
                           
                        </>
                    ) : (
                        <>
                            
                            <Link to="/login">
                                <button className="btn btnLogin">Iniciar sesión</button>
                            </Link>
                           
                        </>
                    )}
                    <Link to="/cursos">
                        <button className="btn btnCursos">Cursos</button>
                    </Link>
                    <Link to="/sobreNosotros">
                        <button className="btn btnCursos">Sobre nosotros</button>
                    </Link>
                    <Link to="/contacto">
                        <button className="btn btnCursos">FAQ</button>
                    </Link>
                    <Link to="/carrito">
                        <button className="btn btnCart">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

