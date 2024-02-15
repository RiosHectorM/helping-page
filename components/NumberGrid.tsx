'use client';

import React from 'react';

const generateNumbers = () => {
  const numbers = [];
  for (let i = 1; i <= 500; i++) {
    numbers.push(i);
  }
  return numbers;
};

const clickNumber = (number: number) => {
  console.log(number);
};

const NumberGrid: React.FC = () => {
  const numbers = generateNumbers();

  return (
    <div className="flex flex-col shadow-2xl shadow-secondary border border-secondary rounded-2xl my-8 justify-center text-center">
      <h1 className="font-extrabold text-3xl pt-2">Numeros disponibles</h1>
      <div className="p-4 flex w-full flex-wrap gap-2 justify-center text-center">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="btn btn-secondary text-center flex justify-center items-center align-middle font-bold w-12 h-10"
            onClick={() => clickNumber(number)}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberGrid;
