const NextGame = () => {
  // proximo sorteo: fecha, cuenta regresiva a fecha 20/02/2024
  const date = new Date('2023-02-20T00:00:00');

  return (
    <div className="card w-96 bg-base-100 shadow-secondary shadow-2xl glass">
      <div className="card-body text-center justify-center align-middle">
        <h2 className="card-title self-center">PROXIMO SORTEO</h2>
        <p className="text-3xl">20/02/2024</p>
      </div>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default NextGame;
