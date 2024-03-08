import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modulo= () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-4">
            <div className="card p-4">
                <h2 className="mb-4">Lección 1: ¿Qué es un podcast?</h2>
                <p className="lead">
                    Un podcast es un formato de contenido digital que consiste en episodios de audio o, en algunos casos, video. A diferencia de la radio tradicional, los podcasts se distribuyen a través de plataformas en línea, permitiendo a los oyentes acceder al contenido en cualquier momento y lugar.
                </p>
                <p>
                    Los podcasts suelen ser temáticos, abordando una amplia variedad de temas que van desde educación, entretenimiento, noticias, tecnología, hasta temas más especializados. Los creadores de podcasts, también conocidos como "podcasters", producen episodios que los oyentes pueden suscribirse y descargar automáticamente a través de aplicaciones de podcast.
                </p>
                <p>
                    La popularidad de los podcasts ha crecido significativamente en los últimos años, proporcionando una forma única y accesible para que las personas compartan historias, información y opiniones. Este formato ofrece una plataforma inclusiva que permite a creadores de contenido de todas partes del mundo llegar a audiencias diversas.
                </p>
            </div>
        </div>
	);
};
