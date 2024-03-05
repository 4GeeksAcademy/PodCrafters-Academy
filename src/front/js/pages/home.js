import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; // import Link
import "../../styles/home.css";
import VideoHomePage from "../../../../public/video/VideoHomePage.mp4";
import logo from "../../../../public/images/Logo.png"; // import logo or define it

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="video">
				<video
					autoPlay
					loop
					muted
					style={{
						position: "absolute",
						width: "100%",
						left: "50%",
						top: "50%",
						height: "100%",
						objectFit: "cover",
						transform: "translate(-50%, -50%)",
						zIndex: "-1"
					}}
				>
					<source src={VideoHomePage} type="video/mp4" />
				</video>
				<div className="hero">
					<div className="container">
						<div className="heroText">
							<div className="heroOpiniones">
								4,8/5,0 de 100+ opiniones 🔥
							</div>
							<h1 className="heroTitle">
								Desata tu potencial sonoro con
							</h1>
							<div className="Pod">PodCrafters Academy</div>
							<div className="heroButton">
								<a href="#" className="btn btnHero">Ver cursos</a>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="cursos container">
				<div className="row justify-content-center">
					<div className="cursosTitle">
						<h2>Descubre nuestros cursos</h2>
					</div>
					<div className="col-6">
						<div className="cursosList">
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 1" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 1</h3>
									<p>Descripción del curso 1</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 2" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 2</h3>
									<p>Descripción del curso 2</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 3" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 3</h3>
									<p>Descripción del curso 3</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">

						<div className="cursosList">
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 1" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 1</h3>
									<p>Descripción del curso 1</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 2" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 2</h3>
									<p>Descripción del curso 2</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
							<div className="curso">
								<div className="cursoImg">
									<img src="https://via.placeholder.com/150" alt="Curso 3" />
								</div>
								<div className="cursoInfo">
									<h3>Curso 3</h3>
									<p>Descripción del curso 3</p>
									<a href="#" className="btn">Ver curso</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};