const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model {
    static associate(models) {
        // 定義與其他模型的關聯
        User.hasMany(models.Card, { foreignKey: 'userId' });
        User.hasMany(models.Comment, { foreignKey: 'userId' });
    }
}

User.init({
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
});

module.exports = User;