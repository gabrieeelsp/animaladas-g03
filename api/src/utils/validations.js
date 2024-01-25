const { sizeList, statusList, colorList, speciesList } = require('.');

const validateName = (name) => {
    if (!name) return 'El nombre no puede estar vacío';
    return null;
};
const validateImage = (image) => {
    if (!image) return 'El campo image no puede estar vacío';
    return null;
};

const validateSpecies = (species) => {
    if (!speciesList.includes(species)) return 'Campo species erroneo';
    return null;
};

const validateStatus = (status) => {
    if (!statusList.includes(status)) return 'Campo status erroneo';
    return null;
};

const validateSize = (size) => {
    if (!sizeList.includes(size)) return 'Campo size erroneo';
    return null;
};

const validateWeight = (weight) => {
    if (!weight) return 'No puede quedar vacío.';
    if (Number.isNaN(weight)) return 'Debe ingresar un numero.';
    return '';
};

const validateColor = (color) => {
    if (!colorList.includes(color)) return 'Campo size erroneo';
    return null;
};

module.exports = {
    validateName,
    validateImage,
    validateSpecies,
    validateStatus,
    validateSize,
    validateWeight,
    validateColor,
};
