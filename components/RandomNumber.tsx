'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const RandomNumber: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    setLoading(true);

    // Simula la generación del número después de 2 segundos
    setTimeout(() => {
      const random = Math.floor(Math.random() * 500) + 1;
      setRandomNumber(random);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col text-center shadow-2xl shadow-black drop-shadow-2xl p-8 border border-black rounded-2xl h-80 justify-between mt-8">
      <h1 className="text-3xl font-bold mb-4">Número Aleatorio</h1>

      {loading ? (
        <div className="flex w-full justify-center ">
          <Image
            src="/assets/load.gif"
            alt="Ticket"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      ) : (
        <p className="text-8xl font-bold mb-4">
          {randomNumber !== null ? randomNumber : '???'}
        </p>
      )}

      <button
        onClick={generateRandomNumber}
        className={`mt-2 bg-red-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-2 sm:p-4 text-black font-bold transition-all duration-500 hover:bg-black hover:text-white flex w-full justify-center rounded-xl ${
          loading ? 'cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'GENERANDO...' : 'GENERAR NUMERO'}
      </button>
    </div>
  );
};
export default RandomNumber;
