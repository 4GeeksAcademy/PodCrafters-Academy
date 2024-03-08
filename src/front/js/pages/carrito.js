import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/carrito.css";


export const Carrito = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <p className="display-4" style={{ color: '#9AC0CD' }}>Carrito</p>
            <div className="scrollable-container">
                <div className="card mb-3 shadow rounded-5">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src="https://picsum.photos/id/237/300/100" className="img-fluid rounded-start m-3" alt="Product" />
                        </div>
                        <div className="col-md-9">
                            <div className="card-body d-flex align-items-center justify-content-between m-2">
                                <div>
                                    <h5 className="card-title">Product Name</h5>
                                    <p className="card-text mt-2">Product description</p>
                                </div>
                                <div className="me-2">
                                    <span className="badge bg-secondary">1</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="card-text">$99.99</p>
                                    </div>
                                    <div className="ms-5">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row justify-content-end">
                <div className="col-md-3">
                    <p><strong>TOTAL</strong></p>
                </div>
            </div>
            <div className="row col-3">
                <label for="exampleFormControlInput1" class="form-label">Codigo Descuento</label>
                <input type="text" class="form-control shadow rounded-5 ms-4" id="exampleFormControlInput1" />

            </div>
            <div className="row col-5 mt-5">
                <p>Forma de Pago</p>
                <div class="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Tarjeta Crédito/Débito
                        </label>
                </div>
                <div className="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Transferencia
                        </label>
                </div>
                <div class="form-check ms-4">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Financiación
                        </label>
                </div>
            </div>

        </div>

    );


}
