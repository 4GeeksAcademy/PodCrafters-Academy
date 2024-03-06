import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/curso.css";
import PodCrafterIniciacion from "../../../../public/images/PodCrafterIniciacion.jpg";
import PodCrafterIntermedio from "../../../../public/images/PodCrafterIntermedio.jpg";
import PodCrafterExperimentado from "../../../../public/images/PodCrafterExperimentado.jpg";
import PodCrafterMaster from "../../../../public/images/PodCrafterMaster.jpg";

export const Cursos = () => {
    const { store, actions } = useContext(Context);

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
                                <div className="card col-3">
                                    <img src={PodCrafterIniciacion} className="cursoImg" alt="..."></img>
                                    <div className="cursoBody">
                                        <h5 className="cursoTitle">PodCrafter Iniciación</h5>
                                        <a href="#" className="btn btnCurso">Saber más</a>
                                    </div>
                                </div>
                                <div className="card col-3">
                                    <img src={PodCrafterIntermedio} className="cursoImg" alt="..."></img>
                                    <div className="cursoBody">
                                        <h5 className="cursoTitle">PodCrafter Intermedio</h5>
                                        <a href="#" className="btn btnCurso">Saber más</a>
                                    </div>
                                </div>
                                <div className="card col-3">
                                    <img src={PodCrafterExperimentado} className="cursoImg" alt="..."></img>
                                    <div className="cursoBody">
                                        <h5 className="cursoTitle">PodCrafter Experimentado</h5>
                                        <a href="#" className="btn btnCurso">Saber más</a>
                                    </div>
                                </div>
                                <div className="card col-3">
                                    <img src={PodCrafterMaster} className="cursoImg" alt="..."></img>
                                    <div className="cursoBody">
                                        <h5 className="cursoTitle">PodCrafter Master</h5>
                                        <a href="#" className="btn btnCurso">Saber más</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};