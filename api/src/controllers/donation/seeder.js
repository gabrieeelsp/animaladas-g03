const { Donation } = require('../../db');

const amountArray = [100, 200, 500, 1000, 2000, 3000, 50000, 70000];

const items = [];

for (let i = 0; i < 5000; i += 1) {
    const date = new Date();
    date.setMonth(Math.floor(Math.random() * 11));
    items.push({
        amount: amountArray[Math.floor(Math.random() * amountArray.length)],
        userId: Math.ceil(Math.random() * (5 - 0) + 0),
        createdAt: new Date(new Date() - Math.random() * 1e12),
    });
}

module.exports = async () => {
    await Donation.destroy({
        where: {},
        force: true,
    });

    await Donation.bulkCreate(items);
};
