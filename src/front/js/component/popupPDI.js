import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/popup.css";

const PopupPDI = ({ curso, handleClosePopup }) => {
    const { actions } = useContext(Context);
    const [cantidad, setCantidad] = useState(1);

    const handleAgregarCarrito = () => {
        actions.agregarAlCarrito(curso, cantidad);
    };

    const handleIncrementarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const handleDecrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={handleClosePopup}></button>
                <div className="close-icon" onClick={handleClosePopup}></div>
                {curso && (
                    <div>
                        <h2>{curso.title}</h2>
                        <p>{curso.description}</p>
                        <div className="cantidad-container">
                            <button onClick={handleDecrementarCantidad}>-</button>
                            <span>{cantidad}</span>
                            <button onClick={handleIncrementarCantidad}>+</button>
                        </div>
                        <button className="btn btn-agregar" onClick={handleAgregarCarrito}>Agregar al carrito</button>
                        <Link to="/carrito" className="btn btn-pagar">Pagar</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopupPDI;
