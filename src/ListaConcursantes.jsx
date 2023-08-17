import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { concursante } from "./model/concursante";
import { apiUserAdmin } from "./api/apiConcursantes";

export const ListaConcursantes = () => {
  const [listaConcursantes, setListaConcursantes] = useState([]);
  const [error, setError] = useState(null);
  const [concursantes, setConcursantes] = useState(concursante);
 
  const viewUsersList = async () => {
    try {
      const getListaConcursantesFromApi = await apiUserAdmin();
      setListaConcursantes(getListaConcursantesFromApi[1]); 
    }catch (error) {
      setError(error);
    }
  };
  
  useEffect(() => {
    viewUsersList();
  }, []);

  useEffect(() => {
  }, [listaConcursantes]);



  if (error) {
    return <div>Hubo un error al cargar los participantes : {error.message}</div>;
  }


  return (
    <>
    <section id="promo" className="promo section offset-header ">
        <div className="container text-center">
          <br /><br />

          <h2 className="title">
            Participantes
          </h2>
          <p className="intro">Listado de los Participantes</p>
          <ul className="meta list-inline">
            <li className="list-inline-item"></li>
          </ul>
        </div>
      </section>

      <div className="container mt-4 mb-5 table-container">
        <div className="table-responsive text-center">
          <table className="table ml-auto custom-table-margin">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Carnet</th>
                <th scope="col">Nombre</th>
                <th scope="col">Direccion</th>
                <th scope="col">Género</th>
                <th scope="col">Telefono</th>
                <th scope="col">Edad</th>
                <th scope="col">Carrera</th>
                <th scope="col">G.Literario</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {listaConcursantes.map((user) => {
                return (
                  <tr key={String(user._id)}>
                    <td>{user.carnet}</td>
                    <td>{user.nombre}</td>
                    <td>{user.direccion}</td>
                    <td>{user.genero}</td>
                    <td>{user.telefono}</td>
                    <td>{user.edad}</td>
                    <td>{user.carrera}</td>
                    <td>{user.tipoPoesia}</td>  
                    <td>{user.fechaInscripcion}</td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
