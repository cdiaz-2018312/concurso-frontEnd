import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { apiLogin } from '../api/apiLogin';
import Swal from 'sweetalert2';

export const LoginAdmin = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const result = await apiLogin(correo, password);
    if (result) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario Verificado!',
        text: 'Ha iniciado sesión correctamente',
        confirmButtonText: 'Ok',
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = '/ListaConcursantes';
        }
      });
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button type="submit" variant="primary">
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};