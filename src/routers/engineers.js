const express = require("express");
const router = express.Router();
const controller = require("../controllers/engineers");
const auth = require("../auth");

router.get("/", controller.getEngineers);
router.get("/:id", controller.getEngineersByid);

auth.setLevel(2, "admin");
router.post("/", auth.checkToken);
router.put("/", auth.checkToken);
router.delete("/", auth.checkToken);

router.put("/", controller.updateEngineer);
router.delete("/", controller.deleteEngineer);

module.exports = router;
