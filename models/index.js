const User = require('./User');
const Shop = require('./Project');

User.hasMany(Shop, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Shop.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Shop };