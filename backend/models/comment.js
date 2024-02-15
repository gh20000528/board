// const { DataTypes, Model } = require('sequelize')
// const sequelize = require('../db')



// class Comment extends Model {
//     static associate(models){
//         Comment.belongsTo(models.User, { foreignKey: 'userId' })
//     }
// }

// Comment.init({
//     intro:{
//         type: DataTypes.STRING
//     },
//     userId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: 'Users',
//             key: 'id'
//         }
//     }
// },{
//     sequelize
// })

// module.exports = Comment