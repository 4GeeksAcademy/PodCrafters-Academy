import React, { useContext } from "react";
import { Context } from "../store/appContext";



export const Privacidad = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <p className="display-4" style={{color: '#9AC0CD'}}>Politica de Privacidad</p>
            <div className="border border-2  p-4 rounded-3 bg-light" style={{ borderColor: '#9AC0CD' }}>
                <h2 className="mb-4">Política de Privacidad de PodCrafters Academy</h2>
                <p>Bienvenido/a a PodCrafters Academy. Valoramos su privacidad y queremos que se sienta seguro/a al utilizar nuestros servicios y visitar nuestro sitio web. A continuación, describimos cómo recopilamos, utilizamos y compartimos su información personal.</p>

                <h4 className="mt-4 mb-2">Información que Recopilamos:</h4>
                <p><strong>Información Personal:</strong></p>
                <ul>
                    <li>Nombre</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Información de pago (si corresponde)</li>
                </ul>

                <p><strong>Información de Uso:</strong></p>
                <ul>
                    <li>Datos de navegación, como la dirección IP, tipo de navegador, páginas visitadas, duración de la visita.</li>
                </ul>

                <h4 className="mt-4 mb-2">Cómo Utilizamos la Información:</h4>
                <p>Utilizamos la información recopilada para:</p>
                <ul>
                    <li>Personalizar su experiencia en PodCrafters Academy.</li>
                    <li>Procesar transacciones y proporcionar los servicios solicitados.</li>
                    <li>Enviar comunicaciones relevantes sobre nuestros productos, servicios y actualizaciones.</li>
                    <li>Mejorar nuestros servicios y entender las preferencias de nuestros usuarios.</li>
                </ul>

                <h4 className="mt-4 mb-2">Cómo Compartimos la Información:</h4>
                <p>No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando es necesario para cumplir con la ley, proteger nuestros derechos o brindar servicios esenciales (por ejemplo, procesadores de pagos).</p>

                <h4 className="mt-4 mb-2">Cookies y Tecnologías Similares:</h4>
                <p>Podemos utilizar cookies y tecnologías similares para recopilar información sobre sus interacciones con nuestro sitio web y mejorar su experiencia de usuario. Puede gestionar las preferencias de cookies a través de la configuración de su navegador.</p>

                <h4 className="mt-4 mb-2">Enlaces a Sitios de Terceros:</h4>
                <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de esos sitios y le recomendamos revisar sus políticas de privacidad.</p>

                <h4 className="mt-4 mb-2">Seguridad:</h4>
                <p>Implementamos medidas de seguridad para proteger la información personal contra accesos no autorizados, uso indebido o divulgación.</p>

                <h4 className="mt-4 mb-2">Derechos de Privacidad en Virtud de la Legislación Española:</h4>
                <p>De acuerdo con la legislación de protección de datos en España, usted tiene derechos sobre sus datos personales, incluido el derecho a acceder, rectificar y eliminar sus datos. Para ejercer estos derechos o realizar consultas sobre nuestra política de privacidad, póngase en contacto con nosotros.</p>

                <h4 className="mt-4 mb-2">Cambios en la Política de Privacidad:</h4>
                <p>Podemos actualizar nuestra Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos mediante la publicación de la versión actualizada en nuestro sitio web.</p>

                <p>Al utilizar PodCrafters Academy, usted acepta los términos de esta Política de Privacidad. Si tiene preguntas o inquietudes, no dude en ponerse en contacto con nosotros a través de [correo electrónico de contacto].</p>

                <p className="mt-4">¡Gracias por confiar en PodCrafters Academy!</p>
                <p><strong>[Nombre de la Empresa]</strong><br/>PodCrafters Academy</p>
            </div>

        </div>

    );


}
