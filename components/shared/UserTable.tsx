import React from 'react';

const generateRandomData = () => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    const randomName = `Usuario ${i}`;
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    data.push({ name: randomName, number: randomNumber });
  }
  return data;
};

const UserTable: React.FC = () => {
  const randomData = generateRandomData();

  return (
    <div className="flex flex-col justify-center items-center glass px-4 shadow-2xl shadow-secondary rounded-2xl">
      <h1 className="font-extrabold text-3xl mb-2">
        Últimos Números comprados
      </h1>
      <table className="table text-center">
        <thead>
          <tr className="bg-base-200">
            <th className="text-xl">Nombre</th>
            <th className="text-xl">Número</th>
          </tr>
        </thead>
        <tbody>
          {randomData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
