const router = require('express').Router();

router.get('/:id/comments',function(req,res){
    Comment.findAll({
        where: {
            post_id: req.params.id
        },
        attributes: [
            'id',
            'comment_text',
            'date',
            'user_id',
            'post_id',
          ],
        include:
            {
              model: User,
              attributes: ['id', 'username'],
              },
            },
        ).then (dbCommentData => {
            const comments = dbCommentData.map(comment => comment.get({ plain: true }));
            res.render('comments', { comments, loggedIn: req.session.loggedIn });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
        });

 module.exports = router;