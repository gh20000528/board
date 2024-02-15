module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define(
        "Card",
        {
            title: {
                type: DataTypes.STRING
            },
            intro: {
                type: DataTypes.STRING
            },
            level: {
                type: DataTypes.STRING
            },
            daybegin: {
                type: DataTypes.STRING
            },
            deadline: {
                type: DataTypes.STRING
            },
            userId: {
                type: DataTypes.INTEGER,
            }
        }, { tableName: "Cards"}
    )

    Card.associate = (models) => {
        const { user } = models

        Card.belongsTo(user, {
            foreignKey: "userId",
			allowNull: true,
        })
    }

    return Card
}