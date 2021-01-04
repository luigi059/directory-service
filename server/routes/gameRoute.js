const express = require("express");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.post("/save",gameController.save);
router.get("/",gameController.getAllGames);

module.exports=router;