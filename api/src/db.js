if (!process.env.ENV || process.env.ENV === 'node') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

// const userModel = require('./models/User');
// const animalModel = require('./models/Animal');
// const adoptionHistoryModel = require('./models/Adoption');
// const donationModel = require('./models/Donation');
// const reviewModel = require('./models/Reviews');

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    },
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js',
    )
    .forEach((file) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// ! ---- IMPORTANTE esto se esta ejecuantdo en la linea 41 ---- !
// userModel(sequelize);
// animalModel(sequelize);
// donationModel(sequelize);
// adoptionHistoryModel(sequelize);
// reviewModel(sequelize);

const { User, Animal, Donation, Adoption, Review } = sequelize.models;

User.hasMany(Donation, { as: 'donations', foreignKey: 'userId' });
Donation.belongsTo(User, { foreignKey: 'userId' });

Animal.hasMany(Donation, {
    foreignKey: 'animalId',
    as: 'donations',
});
Donation.belongsTo(Animal, {
    foreignKey: 'animalId',
    as: 'animal',
});

User.hasMany(Adoption, { as: 'adoptions', foreignKey: 'userId' });
Adoption.belongsTo(User, { foreignKey: 'userId' });

Animal.hasMany(Adoption, {
    foreignKey: 'animalId',
    as: 'adoptions',
});
Adoption.belongsTo(Animal, {
    foreignKey: 'animalId',
    as: 'animal',
});

Review.belongsTo(User, {
    foreignKey: {
        allowNull: false, // La revisión debe tener un usuario asociado
    },
});

User.belongsToMany(Animal, { through: 'User_Animals' });
Animal.belongsToMany(User, { through: 'User_Animals' });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
