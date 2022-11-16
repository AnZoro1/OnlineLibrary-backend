const { populate } = require('../models/Book.model')
const Book = require('../models/Book.model')
const BooksController = {
  addNewBook: async function (req, res) {
    const result = await Book.create({
      name: req.body.name,
      renter: req.body.renter,
      genre: req.body.genre,
    })
    return res.json(result)
  },
  getAllBooks: async function (req, res) {
    const result = await Book.find({}).populate('renter').populate('genre')
    return res.json(result)
  },
  getOneBook: async function (req, res) {
    const result = await Book.findById(req.params.id)
      .populate('renter')
      .populate('genre')
    return res.json(result)
  },
  deleteBook: async function (req, res) {
    const result = await Book.findOneAndRemove(req.params.id)
    return res.json(result)
  },
  changeBook: async function (req, res) {
    const findBook = await Book.findById(req.params.id)
    if (findBook.renter) {
      return res.json('Книга уже занята')
    }
    const result = await Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      renter: req.body.renter,
      genre: req.body.genre,
    })

    return res.json(result)
  },
  getBooksFromGenres: async function (req, res) {
    const result = await Book.find({ genre: req.params.id })
    return res.json(result)
  },
}

module.exports = BooksController
