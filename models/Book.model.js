const mongoose = require('mongoose')
const BookSchema = mongoose.Schema({
  name: String,
  renter: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Client',
  },
  genre: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Genre',
  },
})
const Book = mongoose.model('Book', BookSchema)
module.exports = Book
