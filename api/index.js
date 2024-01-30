/* eslint-disable no-console */
require('dotenv').config();
const app = require('./src/app');

const seederAnimals = require('./src/controllers/animal/seeder');

const { PORT_APP } = process.env;
console.log('valor de PORT_APP', PORT_APP);
const { conn } = require('./src/db');

conn.sync({ force: true })
    .then(() => seederAnimals())
    .then(() => {
        app.listen(PORT_APP, () => {
            // eslint-disable-next-line no-console
            console.log(`app listening on port ${PORT_APP}`);
        });
    })
    .catch((error) => console.error(error));
