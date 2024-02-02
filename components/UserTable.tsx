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
    <div className=''>
      <h1 className="font-extrabold text-3xl">Ultimos Numeros comprados</h1>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Nombre</th>
            <th className="border border-gray-400 p-2">Número</th>
          </tr>
        </thead>
        <tbody>
          {randomData.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{row.name}</td>
              <td className="border border-gray-400 p-2">{row.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
