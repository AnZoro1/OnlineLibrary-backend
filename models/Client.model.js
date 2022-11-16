const mongoose = require('mongoose')
const ClientSchema = mongoose.Schema({
  name: String,
  isBlocked: Boolean,
  rentedBooks: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Book',
    },
  ],
})
const Client = mongoose.model('Client', ClientSchema)
module.exports = Client
