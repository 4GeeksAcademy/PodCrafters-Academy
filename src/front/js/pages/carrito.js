import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrito.css";

import PodCrafterIniciacion from "../../../../public/images/PodCrafterIniciacion.jpg";
import PodCrafterIntermedio from "../../../../public/images/PodCrafterIntermedio.jpg";
import PodCrafterExperimentado from "../../../../public/images/PodCrafterExperimentado.jpg";
import PodCrafterMaster from "../../../../public/images/PodCrafterMaster.jpg";

export const Carrito = () => {
    const { store } = useContext(Context);
    const [voucher, setVoucher] = useState("");
    const [total, setTotal] = useState(0);
    const [descuento, setDescuento] = useState(0);
    const [applyingVoucher, setApplyingVoucher] = useState(false);

    useEffect(() => {
        calcularTotal();
    }, [store.carrito, applyingVoucher]);

    const calcularTotal = () => {
        let total = 0;
        store.carrito.forEach(curso => {
            total += curso.precio;
        });
        if (applyingVoucher && voucher === "STUDENT") {
            setDescuento(total * 0.5);
            setTotal(total - (total * 0.5));
        } else {
            setDescuento(0);
            setTotal(total);
        }
    };

    const handleVoucherChange = (e) => {
        setVoucher(e.target.value);
    };

    const handleApplyVoucher = () => {
        setApplyingVoucher(true);
    };

    return (
        <div className="container">
            <p className="display-4" style={{ color: '#9AC0CD' }}>Carrito</p>
            <div className="scrollable-container">
                {store.carrito.map((curso, index) => (
                    <div key={index} className="curso-en-carrito">
                        {index === 0 && <img src={PodCrafterIniciacion} alt="PodCrafter Iniciacion" style={{ height: '100px', width: '100px'}}/>}
                        {index === 1 && <img src={PodCrafterIntermedio} alt="PodCrafter Intermedio" style={{ height: '100px', width: '100px'}}/>}
                        {index === 2 && <img src={PodCrafterExperimentado} alt="PodCrafter Experimentado" style={{ height: '100px', width: '100px'}}/>}
                        {index === 3 && <img src={PodCrafterMaster} alt="PodCrafter Master"style={{ height: '100px', width: '100px'}} />}
                        <p><strong>{curso.name}</strong></p>
                        <p>{curso.precio}</p>
                    </div>
                ))}
            </div>
            <div className="row justify-content-end mt-3">
                <div className="col-md-3">
                    <p><strong>TOTAL</strong></p>
                    <p>Total: {total}</p>
                    {applyingVoucher && voucher === "STUDENT" && (
                        <p>Total descontado: {total} ({descuento} de descuento)</p>
                    )}
                </div>
            </div>
            <div className="row col-6 mt-3">
                <label htmlFor="voucher" className="form-label">Código Descuento</label>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control shadow rounded-5"
                        id="voucher"
                        value={voucher}
                        onChange={handleVoucherChange}
                    />
                    <button className="btn btn-aplicar" type="button" onClick={handleApplyVoucher}>Aplicar Voucher</button>
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
