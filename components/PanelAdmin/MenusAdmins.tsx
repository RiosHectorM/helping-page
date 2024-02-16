import React from 'react';

const MenusAdmins = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {/* SORTEO */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body font-bold">
          <h2 className="card-title">SORTEO</h2>
          <p>REALIZAR SORTEO DE TICKETS VENDIDOS</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">SORTEAR</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Resetear Sorteo</button>
          </div>
        </div>
      </div>
      {/* compras */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body font-bold">
          <h2 className="card-title">COMPRAS</h2>
          <p>Menu de Administracion de compras de Tickets</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Compras Historicas</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Editar Compras</button>
          </div>
        </div>
      </div>
      {/* PREMIOS */}
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
      {/* Modulo Configuracion */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body font-bold">
          <h2 className="card-title">CONFIGURACION</h2>
          <p>Menu de configuracion de web</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Datos de Contacto</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Mensaje de Bienvenida</button>
          </div>
        </div>
      </div>
      {/* Modulo Mensajes */}
      <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
        <div className="card-body font-bold">
          <h2 className="card-title">INFORMACION / MENSAJES</h2>
          <p>Menu de configuracion de Mensajes</p>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Cargar Informacion</button>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-wide">Ver Mensajes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenusAdmins;
