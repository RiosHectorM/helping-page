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
    <div className="flex flex-col text-center shadow-2xl shadow-secondary p-8 border border-black rounded-2xl h-80 justify-between mt-8 glass">
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
        <p className="text-8xl font-bold mb-4 text-secondary">
          {randomNumber !== null ? randomNumber : '???'}
        </p>
      )}

      <button
        onClick={generateRandomNumber}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        disabled={loading}
      >
        {loading ? 'GENERANDO...' : 'GENERAR NUMERO'}
      </button>
    </div>
  );
};
export default RandomNumber;
