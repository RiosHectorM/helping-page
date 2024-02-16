'use client';

import Image from 'next/image';
import React from 'react';

const dataINFO = {
  titulo: 'TITULO',
  contenido:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit veniam at nesciunt ratione dicta! Quaerat iste similique eveniet delectus atque eos magni natus cumque qui, perspiciatis dolorum voluptatibus illum blanditiis?',
  contenido2:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi culpa et minus, magni ipsa, delectus unde ratione pariatur nam ipsum, aliquam nihil sapiente aut placeat error molestiae optio sunt alias?',
  srcImage:
    'https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg',
};

const Info = () => {
  return (
    <div className="hero mt-12 bg-base-200 glass">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src={dataINFO.srcImage}
          className="max-w-sm rounded-lg shadow-2xl"
          width={500}
          height={500}
          alt={dataINFO.titulo}
        />
        <div>
          <h1 className="text-5xl font-bold">{dataINFO.titulo}</h1>
          <p className="py-6">{dataINFO.contenido}</p>
          <p className="py-6">{dataINFO.contenido2}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
