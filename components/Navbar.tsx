import React from 'react';

const Navbar = () => {
  return (
    <div className="p-4 w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900 border border-black rounded-2xl shadow-2xl shadow-black drop-shadow-2xl sm:p-0">
      <ul className="flex justify-around py-2 flex-wrap sm:flex-row flex-col">
        <li className="my-2 sm:my-4">
          <a
            href="/"
            className="bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-2 sm:p-4 rounded-lg text-black font-bold transition-all duration-500 hover:bg-black hover:text-white flex w-full justify-center"
          >
            INICIO
          </a>
        </li>
        <li className="my-2 sm:my-4">
          <a
            href="/info"
            className="bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-2 sm:p-4 rounded-lg text-black font-bold transition-all duration-500 hover:bg-black hover:text-white flex w-full justify-center"
          >
            INFORMACION
          </a>
        </li>
        <li className="my-2 sm:my-4">
          <a
            href="/winners"
            className="bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-2 sm:p-4 rounded-lg text-black font-bold transition-all duration-500 hover:bg-black hover:text-white flex w-full justify-center"
          >
            GANADORES
          </a>
        </li>
        <li className="my-2 sm:my-4">
          <a
            href="/contact"
            className="bg-red-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100 p-2 sm:p-4 rounded-lg text-black font-bold transition-all duration-500 hover:bg-black hover:text-white flex w-full justify-center"
          >
            CONTACTO
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
