const Genre = require('../models/Genre.model')
const GenreController = {
  addNewGenre: async function (req, res) {
    const result = await Genre.create({
      name: req.body.name,
    })
    return res.json(result)
  },
  deleteGenre: async function (req, res) {
    const result = await Genre.findByIdAndRemove(req.params.id)
    return res.json(result)
  },
  getAllGenres: async function (req, res) {
    const result = await Genre.find({})
    return res.json(result)
  },
  ChangeGenres: async function (req, res) {
    const result = await Genre.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    })
    return res.json(result)
  },
  getOneGenres: async function (req, res) {
    const result = await Genre.findById(req.params.id)
    return res.json(result)
  },
}
module.exports = GenreController
