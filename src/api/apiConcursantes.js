import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/concursantes";

export const apiUserAdmin = async () => {
  try {
    const listaConcursantes = await axios.get(`${URL}mostrarConcursantes`,{ headers: { "x-token": token } });
    return listaConcursantes.data.participantes;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const createConcursante = async ({
  carnet,
  nombre,
  direccion,
  genero,
  telefono,
  edad,
  tipoPoesia,
 
}) => {

  try {
    const response = await axios.post(
      `https://localhost:8080/api/concursante/concursanteAgregar`,
      {
        carnet: carnet,
        nombre: nombre ,
        direccion: direccion,
        genero: genero,
        telefono: telefono,
        edad: edad,
        tipoPoesia: tipoPoesia 
      }
    );
    
    return response.data.fechaInscripcion;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "no se pudo agregar ",
    });
  }
};
