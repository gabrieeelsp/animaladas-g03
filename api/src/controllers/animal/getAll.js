const { Op } = require('sequelize');

const { Animal } = require('../../db');
// para user este metodo de debe enviar un objeton con los filtros que se requieran, un valor limit que representa la cantidad de items por pagina que se deseen obtener y un valor page que define el numero de pagina
// Paginación, [ limit, page ]
// filter: {
//   name: string
//   gender: [ male, female ]
//   species: [ dog, cat ]
//   weight ?
//   size: [ small, medium, large ]
//   status: [ rescued, adoptable, adopted ]
//   vaccines: boolean
//   disability_illness: boolean
//   castrated: bollean
//   }

const getFiltersList = (filters) => {
    const filtersList = {};

    if (filters.name) {
        filtersList.name = {
            [Op.like]: filters.name ? `%${filters.name}%` : '',
        };
    }

    if (filters.gender) {
        filtersList.gender = filters.gender;
    }

    if (filters.species) {
        filtersList.species = filters.species;
    }

    if (filters.size) {
        filtersList.size = filters.size;
    }

    if (filters.status) {
        filtersList.status = filters.status;
    }

    if (filters.disability_illness) {
        filtersList.disability_illness = filters.disability_illness;
    }

    if (filters.castrated) {
        filtersList.castrated = filters.castrated;
    }

    if (filters.vaccines) {
        filtersList.vaccines = filters.vaccines;
    }

    return filtersList;
};

const getOffset = (limit, page) => {
    return limit * (page - 1);
};

const getTotalPages = (limit, totalRecords) => {
    return Math.floor(totalRecords / limit) + 1;
};

const getNextPage = (limit, page, totalRecords) => {
    if (page === getTotalPages(limit, totalRecords)) return null;

    return page + 1;
};

const getPrevPage = (page) => {
    if (page === 1) return null;

    return page - 1;
};

module.exports = async (filters, limit = 3, page = 1) => {
    const { count, rows } = await Animal.findAndCountAll({
        where: getFiltersList(filters),
        offset: getOffset(limit, page),
        limit,
    });

    return {
        data: rows,
        pagination: {
            total_records: count,
            current_page: page,
            total_pages: getTotalPages(limit, count),
            next_page: getNextPage(limit, page, count),
            prev_page: getPrevPage(page),
        },
    };
};
