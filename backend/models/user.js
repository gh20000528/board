module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }
        },{ tableName: "Users" }
    )

    User.associate = (models) => {
        const { card } = models

        User.hasMany(card, {
			foreignKey: "userId",
			allowNull: true,
		});
    }

    return User
}

