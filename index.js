const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    genre: "Action-adventure",
    platform: "Nintendo Switch",
    releaseYear: 2017,
  },
  {
    id: 2,
    title: "God of War",
    genre: "Action-adventure",
    platform: "PlayStation 4",
    releaseYear: 2018,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    genre: "Role-playing",
    platform: "PC",
    releaseYear: 2020,
  },
  {
    id: 4,
    title: "Hollow Knight",
    genre: "Metroidvania",
    platform: "PC",
    releaseYear: 2017,
  },
  {
    id: 5,
    title: "Minecraft",
    genre: "Sandbox",
    platform: "Multi-platform",
    releaseYear: 2011,
  },
];

app.get("/games", (req, res) => {
  res.json(games);
});

app.get("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const game = games.find((game) => game.id === id);

  if (game) {
    res.json(game);
  } else {
    res.status(404).send("Game not found");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
