module.exports = (sequelize, DataTypes) => {

    const Wallets = sequelize.define('wallets', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING,
                allowNull: true
            },
            goal: {
                type: DataTypes.STRING(13),
                allowNull: false,
                unique: false
            },
            collected: {
                type: DataTypes.STRING,
                allowNull: true
            },
            last_paid: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    return Wallets;
}
