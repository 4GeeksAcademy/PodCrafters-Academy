import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const MiPerfil = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <div className="jumbotron rounded" style={{ backgroundColor: '#9AC0CD', display: 'flex', alignItems: 'center' }}>
                <div className="ms-4 d-flex flex-column">
                    <p className="display-4">Mi Perfil</p>
                    <div className="d-flex">
                        <div className="me-4">
                            <p> <i className="fa-solid fa-user me-1"></i>Nombre de Usuario</p>
                            <p> <i className="fa-solid fa-envelope me-1"></i>Email</p>
                            <p> <i className="fa-solid fa-phone me-1"></i>Telefono</p>
                        </div>
                        <div>
                            <p>Contraseña</p>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                        </div>
                    </div>
                    <p>Name</p>
                    <p>LastName</p>
                    <div className="mt-3 mb-3">
                        <button className="btn btn-primary" style={{ backgroundColor: '#FF6347', borderColor: '#FF6347' }}>
                            <i className="fa-solid fa-lock me-1"></i>Cambiar contraseña
                        </button>
                        <button className="btn btn-secondary ms-2" style={{ backgroundColor: '#337AB7', borderColor: '#2E6DA4' }}>
                            <i className="fa-solid fa-pen-to-square me-1"></i>Modificar Perfil
                        </button>
                    </div>
                </div>

                <div className="ms-auto mb-3 text-center d-flex flex-column align-items-center">
                    <p className="mb-0">Foto de perfil</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                    <button className="btn btn-link">
                        <i className="fa-solid fa-gear me-1"></i>Cambiar
                    </button>
                </div>
            </div>
            <div className="jumbotron rounded mt-5 mb-5" style={{ backgroundColor: '#9AC0CD', display: 'flex', flexDirection: 'column' }}>
                <p className="display-4 m-4 ">Mis Cursos</p>

                <div className="card m-4" style={{ width: '25%', height: '100%', backgroundColor: '#081F2E', color: 'white' }}>
                    <img src="https://picsum.photos/id/237/20/20" className="card-img-top p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-outline-light">Go somewhere</a>
                    </div>
                </div>
            </div>
           
        </div>

    );


}
