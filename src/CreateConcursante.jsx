import React, { useState } from "react";
import { sendData } from "./helper/concursanteHelper";
import { concursante } from "./model/concursante";
import { Navigate } from 'react-router-dom'; // Importa Navigate en lugar de Link
import { Button } from "react-bootstrap";
import { LoginAdmin } from "./login/component/login";
export const CreateConcursante = () => {
    const [agregar, setAgregar] = useState(concursante);
    const [generoOptions, setGeneroOptions] = useState(["Masculino", "Femenino"]);
    const [poesiaOptions, setPoesiaOptions] = useState(["Lírica", "Épica", "Dramática"]);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
    };

    const navigateToLogin = () => {
        return <Navigate to="/login" />;
    }

    return (
        <>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link" onClick={navigateToLogin}>¿Eres Admin?</button>
                        </li>
                    </ul>
                </div>
            </nav>
               
            <div className="container table-container">
                <br /><br />
                <h1 id="create-tarea">Bienvenido Participante</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Carnet</label>
                        <input
                            type="text"
                            className="form-control"
                            name="carnet"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        carnet: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombre"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        nombre: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Direccion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="direccion"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        direccion: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                   
                    <div className="form-group">
                        <label className="text-black">Género</label>
                        <input
                            type="text"
                            className="form-control"
                            name="genero"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        genero: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            name="telefono"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        telefono: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Edad</label>
                        <input
                            type="text"
                            className="form-control"
                            name="edad"
                            onChange={(event) =>
                                setAgregar({
                                concursante: {
                                        ...agregar.concursante,
                                        edad: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Carrera</label>
                        <input
                            type="text"
                            className="form-control"
                            name="carrera"
                            onChange={(event) =>
                                setAgregar({
                                concursante: {
                                        ...agregar.concursante,
                                        carrera: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>
                    <div className="form-group">
                        <label className="text-black">Poesía</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tipoPoesia"
                            onChange={(event) =>
                                setAgregar({
                                    concursante: {
                                        ...agregar.concursante,
                                        tipoPoesia: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    

                    <div className="container text-center">
                        <button id="btn-enviar" type="submit" className="btn">
                            Enviar
                        </button>
                    </div>
                    <br /><br />
                </form>
            </div>
        </>
    );
};
