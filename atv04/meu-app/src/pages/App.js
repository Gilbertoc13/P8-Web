import './App.css';

import React, { useState, useEffect } from 'react';

function Counter() {
  const [contador, setContador] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    const intervalo = rodando ? setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000) : null;

    return () => clearInterval(intervalo);
  }, [rodando]);

  
  const stopCount = () => {
    setRodando(false);
  };

  return (
    <div className='container'>
      <h1>Contador: {contador}</h1>
      <button onClick={stopCount}>Parar Contador</button>
    </div>
  );
}

export default Counter;
