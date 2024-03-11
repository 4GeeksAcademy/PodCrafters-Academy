import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const MiPerfil = () => {
    const { store, actions } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');
    const [showChangePassword, setShowChangePassword] = useState(false);

    // Estados para la edición del perfil
    const [editProfile, setEditProfile] = useState(false);
    const [editedUserName, setEditedUserName] = useState(store.user?.userName || '');
    const [editedFirstName, setEditedFirstName] = useState(store.user?.firstName || '');
    const [editedLastName, setEditedLastName] = useState(store.user?.lastName || '');
    const [editedTelephone, setEditedTelephone] = useState(store.user?.telephone || '');

    // Función para manejar la actualización del perfil
    const handleUpdateProfile = () => {
        actions.updateProfile(editedUserName, editedFirstName, editedLastName, editedTelephone);
        setEditProfile(false);
    };

    const handleChangePassword = () => {
        actions.changePassword(store.user.email, newPassword);
        setShowChangePassword(false);
        setNewPassword('');
    };

    useEffect(() => {
        actions.verifyIdentity();
    }, []);

    if (!store.user) {
        return <p>No hay usuario autenticado</p>;
    }

    const { email, telephone, firstName, lastName } = store.user;

    return (
        <div className="container">
            <div className="jumbotron rounded" style={{ backgroundColor: '#9AC0CD', display: 'flex', alignItems: 'center' }}>
                <div className="ms-4 d-flex flex-column">
                    <p className="display-4">Mi Perfil</p>

                    {/* Condición para mostrar campos editables o no */}
                    {editProfile ? (
                        <>
                            <div className="mb-3">
                                <label htmlFor="editedUserName" className="form-label">Username</label>
                                <input type="text" id="editedUserName" value={editedUserName} onChange={(e) => setEditedUserName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editedFirstName" className="form-label">FirstName</label>
                                <input type="text" id="editedFirstName" value={editedFirstName} onChange={(e) => setEditedFirstName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editedLastName" className="form-label">lastName</label>
                                <input type="text" id="editedLastName" value={editedLastName} onChange={(e) => setEditedLastName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editedTelephone" className="form-label">Telephone</label>
                                <input type="text" id="editedTelephone" value={editedTelephone} onChange={(e) => setEditedTelephone(e.target.value)} />
                            </div>
                            <button onClick={handleUpdateProfile}>Guardar cambios</button>
                        </>
                    ) : (
                        <>
                            <p><i className="fa-solid fa-user me-1"></i>UserName: {store.user.userName}</p>
                            <p><i className="fa-solid fa-envelope me-1"></i>Email: {email}</p>
                            <p><i className="fa-solid fa-phone me-1"></i>Telefono: {telephone}</p>
                        </>
                    )}
                    {showChangePassword && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="btn btn-success"
                                style={{ backgroundColor: '#5CB85C', borderColor: '#4CAE4C' }}
                                onClick={handleChangePassword}
                            >
                                Confirmar cambio de contraseña
                            </button>
                        </>
                    )}
                    <p>FirstName: {firstName}</p>
                    <p>LastName: {lastName}</p>
                    <div className="mt-3 mb-3">
                        <button
                            className="btn btn-primary"
                            style={{ backgroundColor: '#FF6347', borderColor: '#FF6347' }}
                            onClick={() => setEditProfile(!editProfile)}
                        >
                            <i className="fa-solid fa-pen-to-square me-1"></i>Modificar Perfil
                        </button>
                        <button
                            className="btn btn-secondary ms-2"
                            style={{ backgroundColor: '#337AB7', borderColor: '#2E6DA4' }}
                            onClick={() => setShowChangePassword(!showChangePassword)}
                        >
                            <i className="fa-solid fa-lock me-1"></i>Cambiar contraseña
                        </button>
                    </div>
                </div>

                <div className="ms-auto mb-3 text-center d-flex flex-column align-items-center">
                    <p className="mb-0">Foto de perfil</p>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                    
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
};