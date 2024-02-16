'use client';

import Image from 'next/image';
import React from 'react';

const generateRandomData = () => {
  const data = [];
  for (let i = 1; i <= 4; i++) {
    const position = i;
    const randomName = `Usuario ${i}`;
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    data.push({
      position: position,
      name: randomName,
      number: randomNumber,
      srcImage:
        'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
    });
  }
  return data;
};

const PremiosList = () => {
  const randomData = generateRandomData();
  return (
    <div className="flex flex-wrap rounded-box justify-around">
      {randomData.length > 0
        ? randomData.map((row, index) => (
            <div
              className="flex flex-col glass m-10 p-10 shadow-secondary shadow-2xl"
              key={index}
            >
              <h1 className="text-3xl mb-2 self-end font-bold">
                {row.position + ' PREMIO'}
              </h1>
              <Image
                src={row.srcImage}
                alt={row.name}
                width={350}
                height={350}
              />
              <h1 className="font-bold text-2xl pt-4">{row.name}</h1>
            </div>
          ))
        : null}
    </div>
  );
};

export default PremiosList;
