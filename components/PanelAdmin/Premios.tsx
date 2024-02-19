import React from 'react';

const Premios = () => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
      <div className="card-body font-bold">
        <h2 className="card-title">PREMIOS</h2>
        <p>Menu de Administracion de Premios</p>
        <div className="card-actions justify-center">
          <button className="btn btn-wide">Agregar Premio</button>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-wide">Modificar Premios</button>
        </div>
      </div>
    </div>
  );
};

export default Premios;
