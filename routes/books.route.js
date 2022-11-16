const { Router } = require('express')
const BooksController = require('../controller/books.controller')
const router = Router()
router.post('/books/admin', BooksController.addNewBook)
router.get('/books/admin', BooksController.getAllBooks)
router.get('/books/admin/:id', BooksController.getOneBook)
router.delete('/books/admin/:id', BooksController.deleteBook)
router.patch('/books/admin/:id', BooksController.changeBook)
router.get('/books/admin/genre/:id', BooksController.getBooksFromGenres)

module.exports = router
