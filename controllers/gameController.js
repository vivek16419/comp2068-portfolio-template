const Game = require('../models/Game');
const url = require('url');

exports.getGames = (req, res) => {
  // Use the Game model to quert our mongdb for the game data and assign it to games

  Game.find((err, games) => {
    if (err) {
      res.render('error');
    } else {
      res.render('games', {
        title: 'All Games',
        games,
        isActive: 'games',
      });
    }
  });
};

exports.home = (req, res, next) => {
  res.render('index', {
    title: 'Express',
    isActive: 'home',
  });
};

exports.admin = (req, res) => {
  Game.find((err, games) => {
    if (err) {
      res.render('error');
    } else {
      res.render('admin', {
        title: 'Admin',
        isActive: 'admin',
        games,
      });
    }
  });
};

exports.playGame = (req, res) => {
  const gamePassed = url.parse(req.url, true).query;

  res.render('play', {
    title: gamePassed.game,
    isActive: 'play',
  });
};

exports.addGame = (req, res) => {
  res.render('addGame', {
    title: 'Add Game',
    isActive: 'add',
  });
};
