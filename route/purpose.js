const express = require('express')
const router = express.Router()
const controller = require('../controller/purposeController');

router.post('/', controller.createPurpose);

router.post('/editPurpose/:id/update', controller.updatePurpose);
router.post('/:id/delete', controller.deletePurpose);




module.exports = router