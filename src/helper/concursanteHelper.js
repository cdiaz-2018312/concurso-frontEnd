import { createConcursante } from "../api/apiConcursantes";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createConcursante({
        carnet: state.concursante.carnet, 
        nombre: state.concursante.nombre,
        direccion: state.concursante.direccion,
        genero: state.concursante.genero,
        telefono: state.concursante.telefono,
        edad: state.concursante.edad,
        carrera: state.concursante.carrera,
        tipoPoesia: state.concursante.tipoPoesia
        
  });
  if (resultado && resultado.data && resultado.data.fechaInscripcion) {
    const fechaInscripcion = resultado.data.fechaInscripcion;

    Swal.fire({
      icon: "success",
      title: "Fecha de Participación",
      text: `La fecha de participación es: ${fechaInscripcion}`,
      showConfirmButton: true,
      confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/concursanteAgregar";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    }
};