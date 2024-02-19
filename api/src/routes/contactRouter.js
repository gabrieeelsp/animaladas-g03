const { Router } = require('express');
const { postContact } = require('../handlers/contactHandler');

const contactRouter = Router();

// contactRouter.post('/', postContact);
contactRouter.post('/sendMail', postContact);

module.exports = contactRouter;
