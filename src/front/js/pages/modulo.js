import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Modulo = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getModulos();
    }, []);

    // Obtener el módulo correspondiente al id proporcionado en los parámetros de la URL
    const moduloToShow = store.modulo.find(modulo => modulo.id === parseInt(id));

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2 className="mb-4">Módulo: {moduloToShow?.nombre_modulo}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div dangerouslySetInnerHTML={{ __html: moduloToShow?.contenido_modulo }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
