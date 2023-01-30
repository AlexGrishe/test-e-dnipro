module.exports = (sequelize, DataTypes) => {

    const Transactions = sequelize.define('transactions', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false
            },
            amount: {
                type: DataTypes.STRING,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

    return Transactions;

}
