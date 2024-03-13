import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Modulo = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getModulos();
    }, []);

    
    const moduloToShow = store.modulo.find(modulo => modulo.id=== 1);

    return (
        <div className="container mt-4">
            {moduloToShow && (
                <div className="col-md-12 col-sm-12 mb-4"  dangerouslySetInnerHTML={{__html: moduloToShow.contenido_modulo}}></div>
            )}
        </div>
    );
};
