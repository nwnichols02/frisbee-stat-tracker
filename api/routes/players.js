const express = require("express");
const router = express.Router();
const Player = require('../models/players-model');
const db = require("../database/db-config");

/* GET players. */

router.get('/', (req, res, next) => {
  Player.getAllPlayers()
    .then((players) => {
      res.status(200).json(players)
    })
    .catch(next)
})


/* GET Player listing by ID. */

router.get("/:id", (req, res, next) => {
  Player.getPlayerById(req.params.id)
    .then((players) => {
      if (players) {
        res.status(200).json(players);
      } else {
        res
          .status(404)
          .json({ message: "failed to get players, it may not exist" });
        }
    })
    .catch(next);
  });
  
  /* POST new players listing. */
  
  router.post("/", (req, res, next) => {
    Player.addPlayer(req.body)
    .then((newPlayer) => {
      res.status(201).json(newPlayer);
    })
    .catch(next);
  });
  
  /* UPDATE existing players listing. */
  
  router.put("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const editedPlayers = await db("players")
      .where("player_id", id)
      .update(req.body);
      if (editedPlayers) {
      res.status(200).json({ message: 'successful update!' });
    } else {
      res.status(404).json({ message: "record not found" });
    }
  } catch (err) {
    next(err);
  }
});

/* DELETE players listing. */

router.delete("/:id", (req, res, next) => {
  Player.deletePlayer(req.params.id)
    .then((count) => {
      res.status(204).json({message: 'successful deletion'}).end()
    })
    .catch((next) => {
      res.status(404).json({ message: "Record not found" });
    });
});

module.exports = router;