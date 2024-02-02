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
    <div>
      <button className="btn btn-warning btn-sm m-1 font-weight-bold" onClick={() => onPrevPage(pagination.prev_page)} disabled={!pagination || !pagination.prev_page}>
        Anterior
      </button>
      <input 
      className="bg-dark text-warning mx-2 w-10" 
      style={{ width: `25px` }}
      onChange={onChange} 
      onKeyDown={(e) => onKeyDown(e)} value={input} />
      <span className=' bg-dark text-warning'>de {Math.ceil(total_pages)}</span>
      <button className="btn btn-warning btn-sm m-1 font-weight-bold" onClick={() => onNextPage(pagination.next_page)} disabled={!pagination || !pagination.next_page}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
