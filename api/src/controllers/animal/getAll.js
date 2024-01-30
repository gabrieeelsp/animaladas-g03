const { Sequelize, Op } = require('sequelize');

const { Animal } = require('../../db');

const getFiltersList = (filters) => {
    const filtersList = {};

    if (filters.name) {
        filtersList.name = Sequelize.where(
            Sequelize.fn('lower', Sequelize.col('animal.name')),
            'like',
            `%${filters.name.toLowerCase()}%`,
        );
    }

    if (filters.age_min && filters.age_max) {
        filtersList.estimatedBirthYear = {
            [Op.and]: [
                Sequelize.where(
                    Sequelize.col('animal.estimatedBirthYear'),
                    '<=',
                    new Date().getFullYear() - filters.age_min,
                ),
                Sequelize.where(
                    Sequelize.col('animal.estimatedBirthYear'),
                    '>=',
                    new Date().getFullYear() - filters.age_max,
                ),
            ],
        };
    }

    if (!filters.age_min && filters.age_max) {
        filtersList.estimatedBirthYear = Sequelize.where(
            Sequelize.col('animal.estimatedBirthYear'),
            '>=',
            new Date().getFullYear() - filters.age_max,
        );
    }

    if (filters.age_min && !filters.age_max) {
        filtersList.estimatedBirthYear = Sequelize.where(
            Sequelize.col('animal.estimatedBirthYear'),
            '<=',
            new Date().getFullYear() - filters.age_min,
        );
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

const getOrderList = (filters) => {
    const orderList = [];

    if (filters.orderby) {
        orderList.push([
            filters.orderby,
            filters.orderdir ? filters.orderdir : 'ASC',
        ]);
    }
    return orderList;
};

const getOffset = (limit, page) => {
    return limit * (page - 1);
};

const getTotalPages = (limit, totalRecords) => {
    return Math.ceil(totalRecords / limit);
};

const getNextPage = (limit, page, totalRecords) => {
    if (page === getTotalPages(limit, totalRecords)) return null;

    return page + 1;
};

const getPrevPage = (page) => {
    if (page === 1) return null;

    return page - 1;
};

module.exports = async (filters, limit, page = 1) => {
    let cantidad = null;
    let filas = null;
    if (!limit) {
        const { count, rows } = await Animal.findAndCountAll({
            where: getFiltersList(filters),
            order: getOrderList(filters),
        });
        cantidad = count;
        filas = rows;
    } else {
        const { count, rows } = await Animal.findAndCountAll({
            where: getFiltersList(filters),
            order: getOrderList(filters),
            offset: getOffset(limit, page),
            limit,
        });
        cantidad = count;
        filas = rows;
    }

    return {
        data: filas,
        pagination: {
            total_records: cantidad,
            current_page: limit ? page : null,
            total_pages: limit ? getTotalPages(limit, cantidad) : null,
            next_page: limit ? getNextPage(limit, page, cantidad) : null,
            prev_page: limit ? getPrevPage(page) : null,
        },
    };
};
