import React from "react";

const Cursos = () => {
    return (
        <div style={{ backgroundColor: "#E2F4F4", paddingTop: "80px" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                        <div className="placeholder" style={{ height: "1000px", backgroundColor: "#E2F4F4" }}>
                            <img src="https://via.placeholder.com/900x900" alt="Imagen Grande" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4">Cursos</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {[1, 2, 3, 4, 5, 6].map((curso) => (
                        <div className="col" key={curso}>
                            <div className="card h-100 border-0 shadow" style={{ backgroundColor: "#9AC0CD", borderRadius: "20px" }}>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <img src="https://via.placeholder.com/200x200" className="card-img-top rounded" alt={`Curso ${curso}`} />
                                        <h5 className="card-title mt-3">Curso {curso}</h5>
                                        <p className="card-text">Descripción del curso.</p>
                                    </div>
                                    <a href="#" className="btn btn-primary text-start" style={{ background: "transparent", border: "none", color: "#000" }}>Read {'>'}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ backgroundColor: "#E2F4F4", height: "50px" }}></div> 
        </div>
    );
};

export default Cursos;
