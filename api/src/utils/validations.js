const { sizeList, statusList, speciesList, genderList } = require('.');
const { User, Animal, Adoption } = require('../db');
const { adoptionStatusList } = require('./index');

const validateAdoption = async (adoptioId) => {
    const adoption = await Adoption.findByPk(adoptioId);
    if (!adoption) return 'La adopcion no existe en la base de datos';

    return null;
};

const validateUserId = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) return 'El usuario no existe en la base de datos';

    return null;
};

const validateAnimalId = async (animalId) => {
    const animal = await Animal.findByPk(animalId);
    if (!animal) return 'El animal no existe en la base de datos';

    return null;
};

const validateAdoptionPending = async (userId, animalId) => {
    const pendingAdoption = await Adoption.findOne({
        where: {
            userId,
            animalId,
            status: adoptionStatusList[0],
        },
    });

    if (pendingAdoption)
        return 'Ya tienes una solicitud pendiente para este animalito';

    return null;
};

const validateAmount = (amount) => {
    if (!amount) return 'El campo amount no puede estar vacío.';

    if (Number.isNaN(amount)) return 'Debe ingresar un número.';

    if (Number(amount <= 0)) return 'De ser un valor mayor que 0';
    return null;
};

const validateName = (name) => {
    if (!name) return 'El nombre no puede estar vacío';
    return null;
};
const validateImage = (image) => {
    // const imageFormatRegex = /\.(jpg|jpeg|png|gif)$/i;
    // if (!image) return 'El campo image no puede estar vacío';
    // if (!imageFormatRegex.test(image)) {
    //     return 'El formato de la imagen no es válido. Por favor, utiliza una imagen en formato jpg, jpeg, png o gif.';
    // }
    // return null;
    return null;
};

const validateSpecies = (species) => {
    if (!speciesList.includes(species)) return 'Campo species erróneo';
    if (!species) return 'El campo species no puede estar vacío';
    return null;
};

const validateStatus = (status) => {
    if (!statusList.includes(status)) return 'Campo status erróneo';
    if (!status) return 'El campo status no puede estar vacío';
    return null;
};

const validateSize = (size) => {
    if (!sizeList.includes(size)) return 'Campo size erróneo';
    if (!size) return 'El campo size no puede estar vacío';
    return null;
};

const validateWeight = (weight) => {
    if (!weight) return 'El campo weight no puede estar vacío.';
    const numericWeight = Number(weight);
    if (Number.isNaN(numericWeight)) return 'Debe ingresar un número.';
    return null;
};

const validateGender = (gender) => {
    if (!genderList.includes(gender)) return 'Campo gender erróneo';
    if (!gender) return 'El campo gender no puede estar vacío';
    return null;
};

module.exports = {
    validateName,
    validateImage,
    validateSpecies,
    validateStatus,
    validateSize,
    validateWeight,
    validateGender,

    validateUserId,
    validateAnimalId,
    validateAmount,

    validateAdoptionPending,
    validateAdoption,
};
