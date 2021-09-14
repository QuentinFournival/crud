const express = require('express');
const router = express.Router();
const controller = require("../controller/webappController");



router.get("/", controller.home);
// service routes //

router.get("/", controller.home);
router.get("/new", controller.renderAddServices);
router.get('/services/edit/:id', controller.renderEditServices);

// purpose routes //

router.get("/purposes", controller.renderPurpose);
router.get('/purposes/create/:serviceId', controller.renderCreatePurpose);
router.get('/purposes/update/:id', controller.renderEditPurpose);
router.get('/purposes/:id', controller.renderOneServicePurpose);

// datatypes routes //
router.get('/datatypes', controller.renderDatatype);
router.get('/datatypes/create/:purposeId', controller.renderAddDatatype);
router.get('/datatypes/update/:id', controller.renderEditDatatype);



module.exports = router;