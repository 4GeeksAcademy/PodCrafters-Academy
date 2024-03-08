import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PopupPDI from "../component/popupPDI";
import "../../styles/curso.css";
import PodCrafterIniciacion from "../../../../public/images/PodCrafterIniciacion.jpg";
import PodCrafterIntermedio from "../../../../public/images/PodCrafterIntermedio.jpg";
import PodCrafterExperimentado from "../../../../public/images/PodCrafterExperimentado.jpg";
import PodCrafterMaster from "../../../../public/images/PodCrafterMaster.jpg";

export const Cursos = () => {
    const { store, actions } = useContext(Context);
    const [popupOpen, setPopupOpen] = useState(false);

    const cursos = [
        {
            title: "PodCrafter Iniciación",
            description: "Este curso te llevará desde cero hasta la creación de tu primer podcast.",
            image: PodCrafterIniciacion
        },
        {
            title: "PodCrafter Intermedio",
            description: "En este curso, aprenderás a mejorar la calidad y contenido de tu podcast.",
            image: PodCrafterIntermedio
        },
        {
            title: "PodCrafter Experimentado",
            description: "Avanza tus habilidades en la producción y promoción de podcasts.",
            image: PodCrafterExperimentado
        },
        {
            title: "PodCrafter Master",
            description: "Conviértete en un experto en podcasting y gestiona tu propio estudio.",
            image: PodCrafterMaster
        }
    ];

    const handleSaberMasClick = (curso) => {
        setPopupOpen(true);
        setSelectedCurso(curso);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const [selectedCurso, setSelectedCurso] = useState(null);

    return (
        <div>
            <div className="container">
                <div className="cursoTop">
                    <div className="row">
                        <div className="col-6 cursoHeader">
                            <div className="cursoTitulo1">Encuentra un curso</div>
                            <div className="cursoTitulo2">que se adapte a ti</div>
                        </div>
                        <div className="col-6 cursoHeader">
                            <div className="cursoTitulo3">
                                Desarrolla tus habilidades en la especialización elegida. Descubra nuestra diversa oferta educativa y encuentre un curso que satisfaga sus expectativas y le abra nuevas puertas en su carrera.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cursoMiddle">
                    <div className="row">
                        <div className="cursosBody container">
                            <div className="row rowCurso">
                                {cursos.map((curso, index) => (
                                    <div key={index} className="card col-3">
                                        <img src={curso.image} className="cursoImg" alt="..."></img>
                                        <div className="cursoBody">
                                            <h5 className="cursoTitle">{curso.title}</h5>
                                            <a href="#" className="btn btnCurso" onClick={() => handleSaberMasClick(curso)}>Saber más</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {popupOpen && <PopupPDI curso={selectedCurso} handleClosePopup={handleClosePopup} />}
        </div>
    );
};
