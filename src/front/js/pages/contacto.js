import React from "react";

const Contacto = () => {

    return (
        <div className="container-fluid p-3" style={{ backgroundColor: "#E2F4F4", paddingBottom: "50px" }}>
            <h2 className="mt-5">Contacto</h2>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                            <textarea className="form-control" id="mensaje" rows="5" ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="como-nos-encontraste" className="form-label">¿Cómo nos encontraste?</label>
                            <select className="form-select" id="como-nos-encontraste">
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
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Teléfono:</strong> (123) 456-7890</li>
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Email:</strong> info@example.com</li>
                                <li className="list-group-item" style={{ backgroundColor: "#E2F4F4" }}><strong>Dirección:</strong> 123 Calle Principal, Ciudad, País</li>
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
                        <span className="badge bg-dark rounded-pill">+</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cuál es el horario de atención al cliente?
                        <span className="badge bg-dark rounded-pill">+</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cómo puedo realizar un seguimiento de mi pedido?
                        <span className="badge bg-dark rounded-pill">+</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: "#E2F4F4" }}>
                        ¿Cuál es la política de devolución?
                        <span className="badge bg-dark rounded-pill">+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
