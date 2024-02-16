import React from 'react';

const MenuContacto = () => {
  const dataInfo = {
    titulo: 'CONTACTANOS',
    mensaje:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit veniam at nesciunt ratione dicta! Quaerat iste similique eveniet delectus atque eos magni natus cumque qui, perspiciatis dolorum voluptatibus illum blanditiis?',
    telefono: '351351351351',
    email: 'mail@mail.com',
  };

  return (
    <div className="glass hero pt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{dataInfo.titulo}</h1>
          <p className="py-6">{dataInfo.mensaje}</p>
          <div className="flex flex-col">
            <div className="flex">
              <p className="py-6 mx-8">Telefono: </p>
              <p className="py-6">{dataInfo.telefono}</p>
            </div>

            <div className="flex">
              <p className="py-6 mx-8">Email: </p>
              <p className="py-6">{dataInfo.email}</p>
            </div>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mensaje</span>
              </label>
              <textarea
                className="textarea textarea-primary"
                placeholder="Dejanos un Mensaje"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">ENVIAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuContacto;
