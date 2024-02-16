import React from 'react';
import ButtonBack from '../shared/ButtonBack';

const NavContacto = () => {
  return (
    <div className="navbar bg-neutral rounded-b-2xl shadow-2xl shadow-secondary">
      <div className="flex-auto">
        <div className="flex-none">
          <ButtonBack />
        </div>
        <h1 className="text-secondary text-2xl font-bold">CONTACTO</h1>
      </div>
    </div>
  );
};

export default NavContacto;
