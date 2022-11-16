const { Router } = require('express')
const GenreController = require('../controller/genres.controller')
const router = Router()
router.post('/genres/admin', GenreController.addNewGenre)
router.get('/genres/admin', GenreController.getAllGenres)
router.delete('/genres/admin/:id', GenreController.deleteGenre)
router.patch('/genres/admin/:id', GenreController.ChangeGenres)
router.get('/genres/admin/:id', GenreController.getOneGenres)
module.exports = router
