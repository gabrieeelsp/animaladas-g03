require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const userModel = require('./models/User');
const animalModel = require('./models/Animal');
const adoptionHistoryModel = require('./models/AdoptionHistory');
const donationModel = require('./models/Donation');

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

userModel(sequelize);
animalModel(sequelize);
donationModel(sequelize);
adoptionHistoryModel(sequelize);

const { User, Animal, Donation, AdoptionHistory } = sequelize.models;

User.hasMany(AdoptionHistory);
AdoptionHistory.belongsTo(User);

User.hasMany(Donation);
Donation.belongsTo(User);

Animal.hasMany(Donation);
Donation.belongsTo(Animal);

Animal.hasMany(AdoptionHistory);
AdoptionHistory.belongsTo(Animal);

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
