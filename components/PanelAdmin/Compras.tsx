'use client';
import React from 'react';

interface ComprasProps {
  openComprasModal: () => void;
}

const Compras: React.FC<ComprasProps> = ({ openComprasModal }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
      <div className="card-body font-bold">
        <h2 className="card-title">COMPRAS</h2>
        <p>Menu de Administracion de compras de Tickets</p>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={openComprasModal}>
            Compras Historicas
          </button>
        </div>
        {/* <div className="card-actions justify-center">
          <button className="btn btn-wide">Editar Compras</button>
        </div> */}
      </div>
    </div>
  );
};

export default Compras;
