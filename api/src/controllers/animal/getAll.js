const { Animal } = require('../../db');

// Paginación, [ limit, page ]
// filter: {
//   name: string
//   gender: [ male, female ]
//   species: [ dog, cat ]
//   weight ?
//   size: [ small, medium, large ]
//   status: [ rescued, adoptable, adopted ]
//   disability_illness: boolean
//   castrated: bollean
//   }
module.exports = async () => {
    const items = await Animal.findAll({
        where: {},
    });

    return items;
};
