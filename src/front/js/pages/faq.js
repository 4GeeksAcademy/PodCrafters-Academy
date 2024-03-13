import React, { useState } from "react";
import "../../styles/faq.css";

const FAQ = () => {
    const [faqOpen, setFaqOpen] = useState({ 1: false, 2: false, 3: false, 4: false });

    const toggleFaq = (index) => {
        setFaqOpen({ ...faqOpen, [index]: !faqOpen[index] });
    }

    return (
        <div className="faq">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6">
                        <div className="faqHead ">
                            ¿Tienes preguntas?
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 ">
                        <div className="faqContenido">
                            <div className="card border-0">
                                <div className="card-header-faq" >
                                    <h6 className="mb-0" onClick={() => toggleFaq(1)}>¿Cómo puedo contactar con soporte técnico?</h6>
                                </div>
                                {faqOpen[1] && <div className="card-body-faq">
                                    <p>Puedes contactar con nuestro equipo de soporte técnico enviando un correo electrónico a podcraftersacademy@gmail.com o llamando al 697-410-543.</p>
                                </div>}
                            </div>
                            <div className="card border-0">
                                <div className="card-header-faq" >
                                    <h6 className="mb-0" onClick={() => toggleFaq(2)}>¿Cuál es el horario de atención al cliente?</h6>
                                </div>
                                {faqOpen[2] && <div className="card-body-faq">
                                    <p>Nuestro horario de atención al cliente es de lunes a viernes de 9:00 a.m. a 5:00 p.m. (hora local).</p>
                                </div>}
                            </div>
                            <div className="card border-0">
                                <div className="card-header-faq" >
                                    <h6 className="mb-0" onClick={() => toggleFaq(3)}>¿Cómo puedo realizar un seguimiento de mi pedido?</h6>
                                </div>
                                {faqOpen[3] && <div className="card-body-faq">
                                    <p>Puedes realizar un seguimiento de tu pedido iniciando sesión en tu cuenta en nuestro sitio web y accediendo a la sección "Mis cursos".</p>
                                </div>}
                            </div>
                            <div className="card border-0">
                                <div className="card-header-faq" >
                                    <h6 className="mb-0" onClick={() => toggleFaq(4)}>¿Cuál es la política de devolución?</h6>
                                </div>
                                {faqOpen[4] && <div className="card-body-faq">
                                    <p>Nuestra política de devolución permite devoluciones dentro de los 30 días siguientes a la compra. Por favor, contactanos para obtener más información.</p>
                                </div>}
                            </div>
                        </div>
                        <div className="support-button text-center d-flex align-items-center justify-content-center mt-4">
                            <p>¿Aún tienes más dudas? Ponte en contacto con nosotros <a href="/contacto">aquí</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;