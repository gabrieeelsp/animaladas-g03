import React from 'react';

const Paginacion = ({ onNextPage, onPrevPage, pagination }) => {
  return (
    <div>
      <button className="btn btn-warning btn-sm m-1 font-weight-bold" onClick={() => onPrevPage(pagination.prev_page)} disabled={!pagination || !pagination.prev_page}>
        Anterior
      </button>
      
      <button className="btn btn-warning btn-sm m-1 font-weight-bold" onClick={() => onNextPage(pagination.next_page)} disabled={!pagination || !pagination.next_page}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
