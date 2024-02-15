import Image from 'next/image';
import React from 'react';

const Message = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:p-4 p-24 rounded-lg shadow-2xl shadow-secondary drop-shadow-2xl md:w-2/3 w-full mt-10 glass">
      <div className="md:w-1/2 relative z-10 hero-content text-center flex-col">
        <h1 className="text-5xl font-bold text-black mb-4">BIENVENIDOS</h1>
        <p className="text-black text-2xl font-bold italic">
          ¡Te invito a participar en nuestra lotería familiar! Tenes la
          oportunidad de elegir un número entre el 1 y el 500, o si prefieres,
          dejar que la suerte decida por vos generando uno aleatoriamente. ¡No
          pierdas la oportunidad de ganar!
        </p>
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg"></div>

      <div className="mt-8 md:mt-0 md:w-1/2 flex items-center justify-center relative z-10">
        <Image
          src="/assets/ticket.png"
          alt="Ticket"
          width={300}
          height={300}
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Message;
