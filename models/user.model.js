

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            balance: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    return Users;
}
