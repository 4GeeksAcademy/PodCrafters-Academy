import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/images/Logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar mt-3">
			<div className="container">
				<Link to="/">
					<img className="imgLogo"
						src={logo}
						width="130"
						height="130"
						alt=""
					/>
				</Link>
				<div className="navItems">
					<Link to="/">
						<button className="btn btnLogin">Login/Registrar</button>
					</Link>
					<Link to="/">
						<button className="btn btnCursos">Cursos</button>
					</Link>
					<Link to="/carrito">
						<button className="btn btnCart">
							<i class="fa-solid fa-cart-shopping"></i>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
