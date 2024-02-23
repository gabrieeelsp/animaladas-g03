import React, { useState, useEffect } from 'react';

const Paginacion = ({ onNextPage, onPrevPage, pagination }) => {

  const { current_page, total_pages } = pagination;
  const [input, setInput] = useState(current_page);

  useEffect(() => {
    setInput(current_page);
  }, [current_page]);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const inputValue = parseInt(e.target.value);

      if (inputValue < 1) {
        setInput(1);
      } else if (inputValue > Math.ceil(total_pages)) {
        setInput(Math.ceil(total_pages));
      } else if (!isNaN(inputValue)) {
        setInput(inputValue);
        onNextPage(inputValue);
      } else if (isNaN(inputValue)) {
        alert("El caracter ingresado no es un número.");
        setInput(1);
      }
    }
  };

  const onChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <button className="btn bg-dark text-warning btn-sm m-1 border-dark" onClick={() => onPrevPage(pagination.prev_page)} disabled={!pagination || !pagination.prev_page}>
        Anterior
      </button>
      <input 
      className="bg-dark text-warning mx-2 w-10 text-center" 
      style={{ width: `50px`, borderRadius: '10px' }}
      onChange={onChange} 
      onKeyDown={(e) => onKeyDown(e)} value={input} />
      <span className='fw-bold' style={{ color: "#FFC107", WebkitTextStroke: '1px black' }}>de {Math.ceil(total_pages)}</span>
      <button className="btn bg-dark text-warning btn-sm m-1 border-dark" onClick={() => onNextPage(pagination.next_page)} disabled={!pagination || !pagination.next_page}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
