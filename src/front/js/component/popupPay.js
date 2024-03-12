import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../../styles/popupPay.css";

const PopupPay = ({ handleClosePopup }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { store } = useContext(Context);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
    const [isMounted, setIsMounted] = useState(true); 

    useEffect(() => {
        return () => {
            setIsMounted(false); 
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement
        });

        if (error) {
            console.error("[error]", error);
            setErrorMessage(error.message);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            if (isMounted) { 
                handleClosePopup();
                setShowSuccessMessage(true); 
            }
        }
    };

    return (
        <div className="popup-container">
            <div className="popup-pay">
                <button className="close-btn" onClick={handleClosePopup}></button>
                <div className="close-icon" onClick={handleClosePopup}></div>
                <h2>Completa tu pago</h2>
                <form onSubmit={handleSubmit}>
                    <div className="card-element-container">
                        <CardElement className="card-element" />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className="btn-pay" disabled={!stripe}>Pagar</button>
                </form>
            </div>
            {showSuccessMessage && ( 
                <div className="payment-success-message">
                    <h2>¡Pago completado con éxito!</h2>
                    <p>Tu pago ha sido procesado correctamente.</p>
                </div>
            )}
        </div>
    );
};

export default PopupPay;
