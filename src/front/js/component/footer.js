import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/footer.css";

export const Footer = () => {
    const { actions } = useContext(Context);

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="footer-links">
                            <a href="/privacidad">Política de privacidad</a>
                            <a href="/privacidad">Términos y condiciones</a>
                            <a href="/contacto">Contacto</a>
                            <a href="/sobreNosotros">Sobre nosotros</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="subscribe">
                            <h3>Suscríbete a nuestro newsletter</h3>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const email = e.target.elements[0].value;
                                actions.subscribe(email);
                            }}>
                                <input type="email" placeholder="Tu correo electrónico" required />
                                <button type="submit">Suscribirse</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                </div>
                <p>&copy; {new Date().getFullYear()} PodCrafters Academy. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
};