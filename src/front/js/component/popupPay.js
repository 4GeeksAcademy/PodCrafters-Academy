import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const PopupPay = ({ handleClosePopup }) => {

    const paymentGateways = [
        { id: 1, name: "Visa" },
        { id: 2, name: "Mastercard" },
        { id: 3, name: "PayPal" }
    ];

    return (
        <div className="popup-pay">
            <div className="popup-pay-inner">
                <button className="close-btn" onClick={handleClosePopup}></button>
                <div className="close-icon" onClick={handleClosePopup}></div>
                <h2>Selecciona tu pasarela de pago</h2>
                <ul>
                    {paymentGateways.map(gateway => (
                        <li key={gateway.id}>{gateway.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PopupPay;
