const Comment = require('../models/Comment.model')
const CommentController = {
  addNewComment: async function (req, res) {
    const result = await Comment.create({
      text: req.body.text,
      client: req.body.client,
      book: req.body.book,
    })
    return res.json(result)
  },
  getAllComments: async function (req, res) {
    const result = await Comment.find({})
      .populate('client')
      .populate('book')
      .populate({
        path: 'book',
        populate: {
          path: 'genre',
          model: 'Genre',
        },
      })
      .populate({
        path: 'book',
        populate: {
          path: 'renter',
          model: 'Client'
        },
      })
    return res.json(result)
  },
}
module.exports = CommentController
