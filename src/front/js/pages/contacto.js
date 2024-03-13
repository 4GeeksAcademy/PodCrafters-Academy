import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/contacto.css";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
        comoNosEncontraste: "",
    });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const { actions } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.enviarContacto(formData);
        setFormData({
            nombre: "",
            email: "",
            mensaje: "",
            comoNosEncontraste: "",
        });
        setShowAlert(true);
        setAlertMessage("Tu mensaje ha sido enviado correctamente");
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    return (
        <div className="container">
            <div className="contactHead">Contacta con nosotros</div>
            <div className="row">
                <div className="col-6">
                    <form className="formContact" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-floating flex-fill mb-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Tu nombre"
                                    onChange={handleChange}
                                    value={formData.nombre}
                                    required
                                />
                                <label htmlFor="nombre" className="form-label">Tu nombre</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-floating flex-fill mb-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Tu correo electrónico"
                                    onChange={handleChange}
                                    value={formData.email}
                                    required
                                />
                                <label htmlFor="email" className="form-label">Tu correo electrónico</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-tag fa-lg me-3 fa-fw"></i>
                            <div className="form-floating flex-fill mb-0">
                                <select
                                    className="form-select"
                                    name="comoNosEncontraste"
                                    id="comoNosEncontraste"
                                    value={formData.comoNosEncontraste}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona una opción</option>
                                    <option value="redes-sociales">Redes Sociales</option>
                                    <option value="busqueda-web">Búsqueda en la web</option>
                                    <option value="referencia">Referencia de un amigo</option>
                                    <option value="otro">Otro</option>
                                </select>
                                <label htmlFor="comoNosEncontraste" className="form-label">¿Cómo nos encontraste?</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-pencil-alt fa-lg me-3 fa-fw"></i>
                            <div className="form-floating flex-fill mb-0">
                                <textarea
                                    className="form-control"
                                    name="mensaje"
                                    id="mensaje"
                                    placeholder="Escribe tu mensaje"
                                    onChange={handleChange}
                                    value={formData.mensaje}
                                    required
                                ></textarea>
                                <label htmlFor="mensaje" className="form-label">Escribe tu mensaje</label>
                                <div className="col-12">
                                    <button type="submit" className="btn btnContact">Enviar mensaje</button>
                                </div>
                                {showAlert && <div className="alert alert-success mt-4" role="alert">{alertMessage}</div>}
                            </div>
                        </div>

                    </form>

                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="cardInfo">
                            <div className="tituloInfo">Información de contacto</div>
                            <p className="cuerpoInfo">Puedes contactarnos a través de los siguientes medios:</p>
                            <li className="list-group-item"><strong>Teléfono:</strong> +34 697 41 05 43 </li>
                            <li className="list-group-item"><strong>Email:</strong> podcraftersacademy@gmail.com </li>
                            <li className="list-group-item"><strong>Dirección:</strong> Calle Salamanca 34, 28014. Madrid. España</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;