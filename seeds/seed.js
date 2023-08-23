const sequelize = require('../config/connection');
const { User, Shop } = require('../models');

const userData = require('./userData');
const shopData = require('./shopData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const shop of shopData) {
    await Shop.create({
      ...shop,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();