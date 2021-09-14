const express = require('express')
const router = express.Router()
const controller = require('../controller/serviceController');

// router.get("/", controller.all);
// router.get("/:id", controller.one);
// router.post("/", controller.create);
// router.put("/", controller.update);
// router.delete("/", controller.delete);


router.post("/", controller.createServices);

router.post('/:id/delete', controller.deleteServices);
router.post('/:id/update', controller.updateServices);







module.exports = router