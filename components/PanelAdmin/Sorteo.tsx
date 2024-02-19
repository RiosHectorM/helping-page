'use client';
import React, { useState } from 'react';

interface SorteoProps {
  openSorteoModal: () => void;
}

const Sorteo: React.FC<SorteoProps> = ({ openSorteoModal }) => {
  const [showSorteoAlert, setShowSorteoAlert] = useState(false);
  const [showReseteoAlert, setShowReseteoAlert] = useState(false);

  const openSorteoAlert = () => {
    setShowSorteoAlert(true);
  };

  const closeSorteoAlert = () => {
    setShowSorteoAlert(false);
  };

  const sortear = () => {
    openSorteoModal();
    closeSorteoAlert(); // Cerrar el modal al realizar el sorteo
  };

  //reseteo Modal
  const openReseteoAlert = () => {
    setShowReseteoAlert(true);
  };

  const closeReseteoAlert = () => {
    setShowReseteoAlert(false);
  };

  const resetear = () => {
    alert('Reseteado');
    closeReseteoAlert(); // Cerrar el modal al realizar el sorteo
  };

  return (
    <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
      <div className="card-body font-bold">
        <h2 className="card-title">SORTEO</h2>
        <p>REALIZAR SORTEO DE TICKETS VENDIDOS</p>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={() => openSorteoAlert()}>
            SORTEAR
          </button>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={() => openReseteoAlert()}>
            Resetear Sorteo
          </button>
        </div>
      </div>

      {/* Modal de sorteo Aceptar Cancelar  */}
      {showSorteoAlert && (
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Vas a realizar el Sorteo?</span>

          <div>
            <button className="btn btn-sm" onClick={() => closeSorteoAlert()}>
              Cancelar
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => sortear()}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
      {/* Modal de Resetera sorteo */}
      {showReseteoAlert && (
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Vas a Reiniciar el Sorteo?</span>

          <div>
            <button className="btn btn-sm" onClick={() => closeReseteoAlert()}>
              Cancelar
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => resetear()}
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorteo;
