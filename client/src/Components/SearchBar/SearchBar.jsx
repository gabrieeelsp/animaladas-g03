import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {

    const location = useLocation();

    if (location.pathname !== "/adoptar") {
      return null;
    }

  return (
<form className="d-flex" role="search">
<input
  className="form-control me-2"
  type="search"
  placeholder="Buscar"
  aria-label="Search"
></input>
<button className="btn btn-outline-warning" type="submit">
  Buscar
</button>
</form>
  );
}
