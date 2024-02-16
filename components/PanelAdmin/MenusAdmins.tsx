import React from 'react';

const MenusAdmins = () => {
  return (
    <div className="flex flex-wrap justify-around">
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">COMPRAS</h2>
          <p>Menu de Administracion de compras de Tickets</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Compras Historicas</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Editar Compras</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Resetear Sorteo</button>
          </div>
        </div>
      </div>
      {/* PREMIOS */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body">
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
      {/* Modulo Configuracion */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">CONFIGURACION</h2>
          <p>Menu de configuracion de web</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Datos de Contacto</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Mensaje de Bienvenida</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Informacion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenusAdmins;
