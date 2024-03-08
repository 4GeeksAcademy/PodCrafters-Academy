import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrito.css";

export const Carrito = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <p className="display-4" style={{ color: '#9AC0CD' }}>Carrito</p>
            <div className="scrollable-container">
                {/* Contenido del carrito */}
            </div>
            <div className="row justify-content-end mt-3">
                <div className="col-md-3">
                    <p><strong>TOTAL</strong></p>
                </div>
            </div>
            <div className="row col-6 mt-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Código Descuento</label>
                <div className="input-group">
                    <input type="text" className="form-control shadow rounded-5" id="exampleFormControlInput1" />
                    <button className="btn btn-aplicar" type="button">Aplicar Voucher</button>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <button className="btn btn-pagar">Pagar</button>
            </div>
            <div className="row mt-5">
                {/* Contenido del footer */}
            </div>
        </div>
    );
};
