'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const generateNumbers = () => {
  const numbers = [];
  for (let i = 1; i <= 500; i++) {
    numbers.push(i);
  }
  return numbers;
};

const NumberGrid: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const openModal = (number: number) => {
    setSelectedNumber(number);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    reset(); // Restablecer los valores del formulario
  };

  const comprarTicket = (data: any) => {
    console.log(data);
    reset(); // Restablecer los valores del formulario
  };

  const numbers = generateNumbers();

  return (
    <div className="flex flex-col shadow-2xl shadow-secondary border border-secondary rounded-2xl my-8 justify-center text-center">
      <h1 className="font-extrabold text-3xl pt-2">Numeros disponibles</h1>
      <div className="p-4 flex w-full flex-wrap gap-2 justify-center text-center">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="btn btn-secondary text-center flex justify-center items-center align-middle font-bold w-12 h-10"
            onClick={() => openModal(number)}
          >
            {number}
          </div>
        ))}
      </div>
      {showModal && selectedNumber !== null && (
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
              <form onSubmit={handleSubmit(comprarTicket)}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Completa con tus datos para comprar este Numero!
                      </h3>
                      <div className="mt-2 flex items-center justify-center">
                        <p className="text-xl text-black">
                          Elegiste el Numero:
                        </p>
                        <p className="text-xl text-black ml-2 ">
                          {selectedNumber}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 font-bold">
                          Nombre:
                        </p>
                        <input
                          type="text"
                          placeholder="..."
                          className="input input-bordered input-secondary w-full max-w-xs"
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
                    onClick={closeModal}
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
    </div>
  );
};

export default NumberGrid;
