import React from 'react';

interface ConfiguracionProps {
  openDatosModal: () => void;
  openBienvenidaModal?: () => void;
}

const Configuracion: React.FC<ConfiguracionProps> = ({
  openDatosModal,
  openBienvenidaModal,
}) => {
  return (
    <div className="card w-96 bg-primary text-primary-content m-8 shadow-secondary shadow-2xl">
      <div className="card-body font-bold">
        <h2 className="card-title">CONFIGURACION</h2>
        <p>Menu de configuracion de web</p>
        <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={openDatosModal}>
            Datos de Contacto
          </button>
        </div>
        {/* <div className="card-actions justify-center">
          <button className="btn btn-wide" onClick={openBienvenidaModal}>
            Mensaje de Bienvenida
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Configuracion;
