import React from 'react';

const Paginacion = ({ onNextPage, onPrevPage, pagination }) => {
  return (
    <div>
      <button onClick={() => onPrevPage(pagination.prev_page)} disabled={!pagination || !pagination.prev_page}>
        Prev
      </button>
      <button onClick={() => onNextPage(pagination.next_page)} disabled={!pagination || !pagination.next_page}>
        Next
      </button>
    </div>
  );
};

export default Paginacion;
