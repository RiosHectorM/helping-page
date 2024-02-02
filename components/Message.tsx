import Image from 'next/image';
import React from 'react';

const Message = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-r from-red-500 to-red-900  md:p-4 p-24 rounded-lg shadow-2xl shadow-black drop-shadow-2xl md:w-2/3 w-full">
      <div className="md:w-1/2 relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">BIENVENIDOS</h1>
        <p className="text-lg text-white">
          Selecciona un número o genera uno de manera aleatoria.
        </p>
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg"></div>

      <div className="mt-8 md:mt-0 md:w-1/2 flex items-center justify-center relative z-10">
        <Image
          src="/assets/ticket.png"
          alt="Ticket"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Message;
