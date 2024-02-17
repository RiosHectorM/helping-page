import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-neutral rounded-b-2xl shadow-2xl shadow-secondary">
      <div className="flex-auto justify-around">
        <Link
          href="/premios"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        >
          PREMIOS
        </Link>
        <Link
          href="/ganadores"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        >
          GANADORES
        </Link>
        <Link
          href="/info"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        >
          INFORMACION
        </Link>
        <Link
          href="/contacto"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        >
          CONTACTO
        </Link>
        <Link
          href="/adminPanel"
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary glass text-white"
        >
          ADMIN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
