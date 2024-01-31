const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');


class Card extends Model {
    static associate(models) {
        // 定義與其他模型的關聯
        Card.belongsTo(models.User, { foreignKey: 'userId' });

    }
}

Card.init({
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
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    sequelize,
});

module.exports = Card;