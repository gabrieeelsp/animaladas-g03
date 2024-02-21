const { Op } = require('sequelize');
const { Adoption, Animal } = require('../../db');

const getFiltersList = (userId) => {
    return {
        userId: userId,
    };
};

const getOrderList = () => {
    return [];
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

module.exports = async (userId, limit, page = 1) => {
    try {
        let cantidad = null;
        let filas = null;

        const { count, rows } = await Adoption.findAndCountAll({
            where: getFiltersList(userId),
            include: [
                {
                    model: Animal,
                    as: 'animal',
                    attributes: [
                        'id',
                        'name',
                        'gender',
                        'image1',
                        'image2',
                        'image3',
                        'image4',
                        'species',
                        'status',
                        'size',
                        'weight',
                        'vaccines',
                        'estimatedBirthYear',
                        'castrated',
                        'rescued_story',
                        'adoption_story',
                    ],
                },
            ],
            order: getOrderList(),
            offset: getOffset(limit, page),
            limit,
        });

        cantidad = count;
        filas = rows;

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
    } catch (error) {
        throw new Error('Error al obtener el total de adopciones del usuario');
    }
};
