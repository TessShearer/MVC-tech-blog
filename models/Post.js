const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create post model
class Post extends Model {

}

// create post mysql info
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    header: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);
// class Post extends Model {
//   static upLike(body, models) {
//     return models.Like.create({
//       user_id: body.user_id,
//       post_id: body.post_id
//     }).then(() => {
//       return Post.findOne({
//         where: {
//           id: body.post_id
//         },
//         attributes: [
//           'id',
//           'post_url',
//           'title',
//           'created_at',
//           [sequelize.literal('(SELECT COUNT(*) FROM Like WHERE post.id = Like.post_id)'), 'Like_count']
//         ],
//         include: [
//           {
//             model: models.Comment,
//             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//             include: {
//               model: models.User,
//               attributes: ['username']
//             }
//           }
//         ]
//       });
//     });
//   }
// }


module.exports = Post;
