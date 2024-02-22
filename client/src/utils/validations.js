export const validarEmail =  (email) => {
    if ( !email ) return 'El email no puede quedar vacío';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !re.test(email) ) return 'No es un formato válido';

    return '';
}

export const validarPassword = (password) => {
    if ( !password ) return 'El password no puede quedar vacío';

    return '';
}
