const express = require('express')

const startNewLeadController = require('../useCases/startNewLead/startNewLead.controller')

const router = express.Router()

// -------------------- start-new-lead-routes --------------------
router.post('/selfservice', startNewLeadController.handle)

module.exports = router