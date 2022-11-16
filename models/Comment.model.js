const mongoose = require('mongoose')
const CommentSchema = mongoose.Schema({
  text: String,
  client: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Client',
  },
  book: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book',
  },
})
const Comment = mongoose.model('Comment', CommentSchema)
module.exports = Comment
