import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Contacto = () => {
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);

    const toggleFaq1 = () => setFaq1(!faq1);
    const toggleFaq2 = () => setFaq2(!faq2);
    const toggleFaq3 = () => setFaq3(!faq3);
    const toggleFaq4 = () => setFaq4(!faq4);

    const { actions } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const mensaje = e.target.mensaje.value;
        const comoNosEncontraste = e.target["comoNosEncontraste"].value;
    
        await actions.enviarContacto({ nombre, email, mensaje, comoNosEncontraste });
    

    }

    return (
        <div className="container-fluid p-3" style={{ backgroundColor: "#E2F4F4", paddingBottom: "50px" }}>
            <h2 className="mt-5">Contacto</h2>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="5" required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="como-nos-encontraste" className="form-label">¿Cómo nos encontraste?</label>
                            <select className="form-select" id="comoNosEncontraste" required>
                                <option value="">Selecciona una opción</option>
                                <option value="redes-sociales">Redes Sociales</option>
                                <option value="busqueda-web">Búsqueda en la web</option>
                                <option value="referencia">Referencia de un amigo</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#E2F4F4", color: "#000" }}>Enviar</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="card border-0" style={{ backgroundColor: "#E2F4F4" }}>
                        <div className="card-body">
                            <h5 className="card-title">Información de contacto</h5>
                            <p className="card-text">Puedes contactarnos a través de los siguientes medios:</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Teléfono:</strong> 697-410-543 </li>
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Email:</strong> podcraftersacademy@gmail.com </li>
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Dirección:</strong> Calle Salamanca 34, 28014. Madrid. España</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5" style={{ backgroundColor: "#E2F4F4", paddingBottom: "50px" }}>
                <h2>Preguntas frecuentes</h2>
                <div className="list-group">
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cómo puedo contactar con soporte técnico?
                        <span className="badge bg-dark rounded-pill" onClick={toggleFaq1}>{faq1 ? "-" : "+"}</span>
                    </div>
                    {faq1 && <div className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}>
                        Puedes contactar con nuestro equipo de soporte técnico enviando un correo electrónico a podcraftersacademy@gmail.com o llamando al 697-410-543.
                    </div>}
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cuál es el horario de atención al cliente?
                        <span className="badge bg-dark rounded-pill" onClick={toggleFaq2}>{faq2 ? "-" : "+"}</span>
                    </div>
                    {faq2 && <div className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}>
                        Nuestro horario de atención al cliente es de lunes a viernes de 9:00 a.m. a 5:00 p.m. (hora local).
                    </div>}
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cómo puedo realizar un seguimiento de mi pedido?
                        <span className="badge bg-dark rounded-pill" onClick={toggleFaq3}>{faq3 ? "-" : "+"}</span>
                    </div>
                    {faq3 && <div className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}>
                        Puedes realizar un seguimiento de tu pedido iniciando sesión en tu cuenta en nuestro sitio web y accediendo a la sección "Mis cursos".
                    </div>}
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cuál es la política de devolución?
                        <span className="badge bg-dark rounded-pill" onClick={toggleFaq4}>{faq4 ? "-" : "+"}</span>
                    </div>
                    {faq4 && <div className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}>
                        Nuestra política de devolución permite devoluciones dentro de los 30 días siguientes a la compra. Por favor, contactanos para obtener más información.
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Contacto;
