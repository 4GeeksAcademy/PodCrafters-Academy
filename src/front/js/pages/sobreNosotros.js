import React from "react";
import imagenPodcaster from "../../../../public/images/podcasterSobreNosotrosMain.jpg"; // Importa la imagen aquí

const SobreNosotros = () => {
    return (
        <div style={{ backgroundColor: "#E2F4F4", paddingTop: "80px" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={imagenPodcaster} style={{ width: "100%", maxWidth: "400px", height: "auto" }} alt="Imagen Podcaster" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mb-4">Sobre Nosotros</h2>
                        <p>PodCrafters Academy es el resultado del sueño compartido de tres pioneros apasionados por el poder del podcasting. Desde nuestros inicios en el año 2020, hemos creído firmemente en la magia que puede surgir a través de la voz y las historias compartidas. Con el objetivo de democratizar el conocimiento y empoderar a futuros creadores de contenido, creamos esta escuela como un espacio para cultivar talentos y compartir experiencias. Nuestro compromiso con la excelencia y la innovación ha guiado cada paso de nuestro viaje, y esperamos continuar inspirando y capacitando a la próxima generación de podcasters.</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "50px" }}></div>
        </div>
    );
};

export default SobreNosotros;