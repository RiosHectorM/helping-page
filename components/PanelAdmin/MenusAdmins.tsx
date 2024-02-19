'use client';
import React, { useState } from 'react';
import Sorteo from './Sorteo';
import Compras from './Compras';
import Premios from './Premios';
import Configuracion from './Configuracion';
import InfoMsj from './InfoMsj';
import UserTable from '../shared/UserTable';
import { useForm } from 'react-hook-form';
import FormPhoto from './Photo';

const MenusAdmins = () => {
  const [showSorteoModal, setShowSorteoModal] = useState(false);
  const [showComprasModal, setShowComprasModal] = useState(false);
  const [showDatosModal, setShowDatosModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMsjModal, setShowMsjModal] = useState(false);
  // const [showBienvenidaModal, setShowBienvenidaModal] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  // CONFIGURACION DE MSJ
  const openSorteoModal = () => {
    setShowSorteoModal(true);
  };

  const closeSorteoModal = () => {
    setShowSorteoModal(false);
  };

  // GONFIGURACION DE MODAL DE COMPRAS HISTORICAS
  const openComprasModal = () => {
    setShowComprasModal(true);
    console.log(showComprasModal);
  };

  const closeComprasModal = () => {
    setShowComprasModal(false);
  };

  // CONFIGURACION DE DATOS DE CONTACTO
  const openDatosModal = () => {
    setShowDatosModal(true);
  };

  const closeDatosModal = () => {
    setShowDatosModal(false);
    reset(); // Restablecer los valores del formulario
  };

  const modificarDatos = (data: any) => {
    console.log(data);
    reset(); // Restablecer los valores del formulario
  };

  // CONFIGURACION DE INFO/MSJ
  const openInfoModal = () => {
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
    reset(); // Restablecer los valores del formulario
  };

  const modificarInfo = (data: any) => {
    console.log(data);
    reset(); // Restablecer los valores del formulario
  };

  // CONFIGURACION DE MSJ
  const openMsjModal = () => {
    setShowMsjModal(true);
  };

  const closeMsjModal = () => {
    setShowMsjModal(false);
    reset(); // Restablecer los valores del formulario
  };

  // CONFIGURACION DE MENSAJE DE BIENVENIDA
  // const openBienvenidaModal = () => {
  //   setShowDatosModal(true);
  // };

  // const closeBienvenidaModal = () => {
  //   setShowDatosModal(false);
  //   reset(); // Restablecer los valores del formulario
  // };

  // const modificarBienvenida = (data: any) => {
  //   console.log(data);
  //   reset(); // Restablecer los valores del formulario
  // };

  return (
    <div className="flex flex-wrap justify-around">
      <Sorteo openSorteoModal={openSorteoModal} />
      <FormPhoto />
      <Compras openComprasModal={openComprasModal} />
      <Premios />
      <Configuracion
        openDatosModal={openDatosModal}
        // openBienvenidaModal={openBienvenidaModal}
      />
      <InfoMsj openInfoModal={openInfoModal} openMsjModal={openMsjModal} />

      {showSorteoModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={() => {}}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        eL NUMERO GANADOR ES:
                      </h3>
                      <h1>999</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={closeSorteoModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    ACEPTAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showComprasModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={() => {}}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Listado de Compras Historicas
                      </h3>
                      <UserTable />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeComprasModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showDatosModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit(modificarDatos)}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Configuracion de Datos de Contacto
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Mensaje de Contacto:
                        </p>
                        <textarea
                          placeholder="..."
                          className="textarea textarea-bordered w-full max-w-xs"
                          {...register('nombre', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Telefono:
                        </p>
                        <input
                          type="number"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
                          {...register('telefono', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Email:
                        </p>
                        <input
                          type="email"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
                          {...register('email', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Comprar!
                  </button>
                  <button
                    onClick={closeDatosModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showInfoModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit(modificarInfo)}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Configuracion de Informacion
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Titulo de Informacion:
                        </p>
                        <input
                          type="text"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
                          {...register('email', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Primer Mensaje:
                        </p>
                        <textarea
                          placeholder="..."
                          className="textarea textarea-bordered w-full max-w-xs"
                          {...register('nombre', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Segundo Mensaje:
                        </p>
                        <textarea
                          placeholder="..."
                          className="textarea textarea-bordered w-full max-w-xs"
                          {...register('nombre', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Comprar!
                  </button>
                  <button
                    onClick={closeInfoModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showMsjModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={() => {}}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Listado de Mensajes
                      </h3>
                      <UserTable />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeMsjModal}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* {showBienvenidaModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit(modificarBienvenida)}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Configuracion de Datos de Contacto
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Mensaje de Contacto:
                        </p>
                        <textarea
                          placeholder="..."
                          className="textarea textarea-bordered w-full max-w-xs"
                          {...register('nombre', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Telefono:
                        </p>
                        <input
                          type="number"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
                          {...register('telefono', { required: true })}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Email:
                        </p>
                        <input
                          type="email"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
                          {...register('email', { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Comprar!
                  </button>
                  <button
                    onClick={closeBienvenidaModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MenusAdmins;
