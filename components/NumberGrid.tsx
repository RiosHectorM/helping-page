import React from 'react';

const generateNumbers = () => {
  const numbers = [];
  for (let i = 1; i <= 500; i++) {
    numbers.push(i);
  }
  return numbers;
};

const NumberGrid: React.FC = () => {
  const numbers = generateNumbers();

  return (
    <div className="flex flex-col shadow-2xl shadow-black drop-shadow-2xl border border-black rounded-2xl my-8 justify-center text-center">
      <h1 className="font-extrabold text-3xl">
        Elegi el numero que mas te guste
      </h1>
      <div className="p-4 flex w-full flex-wrap gap-2 justify-center text-center">
        {numbers.map((number, index) => (
          <div
            key={index}
            className="bg-gray-200 p-2 text-center rounded flex w-12 h-10 justify-center items-center align-middle font-bold"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberGrid;
