import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const MiPerfil = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="jumbotron rounded" style={{ backgroundColor: '#9AC0CD' }}>
                <p className="display-4 ms-4">Mi Perfil</p>
                <p className="ms-4"> Nombre de Usuario</p>
                <p className="ms-4"> Email</p>
                <p className="ms-4"> Telefono</p>
                <p className="ms-4"> Name</p>
                <p className="ms-4"> LastName</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></img>
            </div>
        </div>
    );
};
