const express = require("express");

const movieController = require("../controllers/movies");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.movie("", checkAuth, extractFile, movieController.createmovie);

router.put("/:id", checkAuth, extractFile, movieController.updatemovie);

router.get("", movieController.getmovies);

router.get("/:id", movieController.getmovie);

router.delete("/:id", checkAuth, movieController.deletemovie);

module.exports = router;
