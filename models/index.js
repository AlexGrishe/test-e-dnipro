const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
        port: dbConfig.PORT,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    },
);

sequelize.authenticate()
    .then(() => {
        console.log('connected')
    })
    .catch(err => {
        console.log(err)
    })

const db = {};

db.sequelize = sequelize;

db.Users = require('./user.model')(sequelize, DataTypes)
db.Wallets = require('./wallet.model')(sequelize, DataTypes)
db.Transactions = require('./transactions.model')(sequelize, DataTypes)
db.Cards = require('./cards.model')(sequelize, DataTypes)

db.sequelize.sync({force: false})
    .then(() => {
        console.log('yes re-sync done!')
    })

db.Users.hasMany(db.Wallets, {
    foreignKey: 'user_id',
    as: 'wallet_id'
});

db.Wallets.belongsTo(db.Users, {
    foreignKey: 'user_id',
    as: 'user'
});

db.Users.hasMany(db.Cards, {
    foreignKey: 'user_id',
    as: 'card_id'
});

db.Cards.belongsTo(db.Users, {
    foreignKey: 'user_id',
    as: 'user'
});

db.Users.hasMany(db.Transactions, {
    foreignKey: 'user_id',
    as: 'transaction_id'
});

db.Transactions.belongsTo(db.Users, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = db;



