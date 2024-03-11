import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Modulo = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getModulos();
    }, []);

    // Supongamos que quieres mostrar el módulo con id_modulo igual a 1
    const moduloToShow = store.modulo.find(modulo => modulo.id === 1);

    return (
        <div className="container mt-4">
            {moduloToShow && (
                <div className="col-md-12 col-sm-12 mb-4"  dangerouslySetInnerHTML={{__html: moduloToShow.contenido_modulo}}></div>
            )}
        </div>
    );
};
