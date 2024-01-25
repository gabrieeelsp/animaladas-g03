/* eslint-disable no-console */
require('dotenv').config();
const app = require('./src/app');

const { PORT_APP } = process.env;
const { conn } = require('./src/db');

conn.sync({ force: true })
    .then(() => {
        app.listen(PORT_APP, () => {
            // eslint-disable-next-line no-console
            console.log(`app listening on port ${PORT_APP}`);
        });
    })
    .catch((error) => console.error(error));
