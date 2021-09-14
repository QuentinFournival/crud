const express = require("express");
const router = express.Router();

const ctrl = require("../controller/datatypeController");

router.get("/", ctrl.all);
router.get("/:id", ctrl.one);
router.post("/", ctrl.create);
router.post("/update/:id/edit", ctrl.update);
router.post("/:id/delete", ctrl.delete);

module.exports = router;