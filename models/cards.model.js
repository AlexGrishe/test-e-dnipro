module.exports = (sequelize, DataTypes) => {

    const Cards = sequelize.define('cards', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            card_num: {
                type: DataTypes.STRING,
                allowNull: false
            },
            expiry_day: {
                type: DataTypes.STRING(13),
                allowNull: false,
                unique: true
            },
            cvv: {
                type: DataTypes.STRING,
                allowNull: true
            },
            img: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    return Cards;
}
