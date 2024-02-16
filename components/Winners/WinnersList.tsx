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
      premio: position + ' PREMIO ' + randomNumber,
    });
  }
  return data;
};

const WinnersList = () => {
  const randomData = generateRandomData();
  return (
    <div className="flex flex-wrap rounded-box justify-around">
      <div className="overflow-x-auto mt-12 bg-primary shadow-secondary shadow-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl bg-secondary text-primary-content text-center">
              <th>Posicion</th>
              <th>Nombre</th>
              <th>Numero Ganador</th>
              <th>Premio</th>
            </tr>
          </thead>
          <tbody>
            {randomData.length > 0
              ? randomData.map((row, index) => (
                  <tr key={index} className="font-bold text-center">
                    <th className="text-2xl">{row.position}</th>
                    <td>
                      {row.name + row.name + row.name + row.name + row.name}
                    </td>
                    <td className="text-2xl">{row.number}</td>
                    <td className="text-lg">{row.premio}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WinnersList;
