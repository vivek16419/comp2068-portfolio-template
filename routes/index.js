const express = require('express');

const router = express.Router();
const gamesController = require('../controllers/gameController');

/* GET home page. */
router.get('/', gamesController.home);

router.get('/games', gamesController.getGames);
router.get('/admin', gamesController.admin);
router.get('/playgame', gamesController.playGame);

router.get('/add', gamesController.addGame);
// router.post('/add', gamesController.createGame);

module.exports = router;
