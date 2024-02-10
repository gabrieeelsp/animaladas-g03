if (!process.env.ENV || process.env.ENV === 'node') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}
const app = require('./src/app');

const seederAnimals = require('./src/controllers/animal/seeder');
const seederUsers = require('./src/controllers/user/seeder');

const { PORT_APP } = process.env;
const { conn } = require('./src/db');

conn.sync({ force: true })
    .then(() => {
        seederAnimals();
        seederUsers();
    })
    .then(() => {
        app.listen(PORT_APP, () => {
            // eslint-disable-next-line no-console
            console.log(`app listening on port ${PORT_APP}`);
        });
    })
    .catch((error) => console.error(error));
