const { Router } = require('express')
const ClientController = require('../controller/clients.controller')
const router = Router()
router.post('/clients/admin', ClientController.AddNewClient)
router.patch('/clients/admin/:id', ClientController.changeClient)
router.get('/clients/admin', ClientController.getAllClients)
module.exports = router
