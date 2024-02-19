import React from 'react';

interface ComprasProps {
  openInfoModal: () => void;
  openMsjModal: () => void;
}

const InfoMsj: React.FC<ComprasProps> = ({ openInfoModal, openMsjModal }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
      <div className="card-body font-bold">
        <h2 className="card-title">INFORMACION / MENSAJES</h2>
        <p>Menu de configuracion de Mensajes</p>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={openInfoModal}>
            Cargar Informacion
          </button>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={openMsjModal}>
            Ver Mensajes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoMsj;
