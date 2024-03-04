import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const MiCurso = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<p className="display-4" style={{ color: '#9AC0CD' }}>Titulo Curso</p>
					
				</div>
			</div>
			<div className="row justify-content-end">
				<div className="col-md-4">
					<div className="text-right">
						<p>Solicitar Mentorias</p>
						<div>
							<a href="https://calendly.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '5px' }} /></a>
							<a href="https://calendly.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '5px' }} /></a>
							<a href="https://calendly.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" style={{ width: '50px', height: '50px', borderRadius: '50%', margin: '5px' }} /></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row ">
				<div className="col-md-10 mb-2">
					<p>Módulo 1: Introducción al Podcasting</p>
					<div className="card rounded-pill mt-2 mb-2">
						<div className="card-body row ">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								1
							</p>
							<p className="col-md-9"><Link to="/modulo">¿Qué es un podcast?</Link></p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
					<div className="card rounded-pill mt-2">
						<div className="card-body row">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								2
							</p>
							<p className="col-md-9"><Link to="/modulo">Historia y evolución del podcasting</Link></p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
					<div className="card rounded-pill mt-2">
						<div className="card-body row">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								3
							</p>
							<p className="col-md-9"><Link to="/modulo">Beneficios y oportunidades en el mundo del podcasting</Link></p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-10">
					<p>Módulo 2: Planificación y Conceptualización</p>
					<div className="card rounded-pill mt-2">
						<div className="card-body row ">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								1
							</p>
							<p className="col-md-9">Identificación de la audiencia objetivo</p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
					<div className="card rounded-pill mt-2">
						<div className="card-body row">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								2
							</p>
							<p className="col-md-9">Definición del formato y estilo del podcast</p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
					<div className="card rounded-pill mt-2">
						<div className="card-body row">
							<p className="bg-primary text-white rounded-circle p-3 col-md-1 d-flex align-items-center justify-content-center ms-2" style={{ width: '30px', height: '30px', margin: '0' }}>
								3
							</p>
							<p className="col-md-9">Creación de una propuesta única y atractiva</p>
							<i className="fa-solid fa-circle-check col-md-2 fs-2 text-primary text-end"></i>
						</div>
					</div>
				</div>
			</div>
			

		</div>
	);
};
