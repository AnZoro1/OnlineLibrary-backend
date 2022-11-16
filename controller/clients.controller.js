const Client = require('../models/Client.model')

const ClientController = {
  AddNewClient: async (req, res) => {
    try {
      const result = await Client.create({
        name: req.body.name,
        isBlocked: req.body.isBlocked,
        rentedBooks: req.body.rentedBooks,
      })
      return res.json(result)
    } catch (err) {
      return res.json(err)
    }
  },
  changeClient: async function (req, res) {
    const client = await Client.findById(req.params.id)

    if (client.isBlocked) {
      return res.json('Вы заблокированы, вам отказано в доступе')
    }

    if (client.rentedBooks.length >= 3) {
      return res.json(
        'В библиотеке нельзя брать больше 3 книг в аренду, вам отказано'
      )
    }
    const result = await Client.findByIdAndUpdate(
      req.params.id,
      { $push: { rentedBooks: req.body.rentedBooks } },
      { new: true }
    )
    return res.json(result)
  },
  getAllClients: async function (req, res) {
    const result = await Client.find({})
      .populate('rentedBooks')
      .populate({
        path: 'rentedBooks',
        populate: {
          path: 'renter',
          model: 'Client',
        },
      })
    return res.json(result)
  },
}
module.exports = ClientController
