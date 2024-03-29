const { Op } = require('sequelize');
const { Donation } = require('../../db');

const getFiltersList = (filters) => {
    const filtersList = {};

    if (filters.userId) {
        filtersList.userId = filters.userId;
    }

    if (filters.animalId && filters.animalId !== 0) {
        filtersList.animalId = filters.animalId;
    }

    if (Number(filters.animalId) === 0) {
        filtersList.animalId = { [Op.is]: null };
    }

    if (filters.dateFrom && filters.dateTo) {
        filtersList.createdAt = {
            [Op.between]: [filters.dateFrom, filters.dateTo],
        };
    }

    return filtersList;
};

const getOrderList = (filters) => {
    const orderList = [];

    if (filters.orderBy && filters.orderBy === 'created') {
        orderList.push([
            'createdAt',
            filters.orderDir ? filters.orderDir : 'ASC',
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
    console.log('informacion de filters', filters);
    console.log('informacion de limit', limit);
    let cantidad = null;
    let filas = null;
    if (!limit) {
        const { count, rows } = await Donation.findAndCountAll({
            where: getFiltersList(filters),
            include: ['user', 'animal'],
            order: getOrderList(filters),
        });
        cantidad = count;
        filas = rows;
    } else {
        const { count, rows } = await Donation.findAndCountAll({
            where: getFiltersList(filters),
            include: ['user', 'animal'],
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
