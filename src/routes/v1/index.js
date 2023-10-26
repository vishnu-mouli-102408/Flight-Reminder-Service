const express = require("express");

const router = express.Router();

const EmailController = require("../../controller/email-controller");

router.post("/tickets", EmailController.create);

module.exports = router;
