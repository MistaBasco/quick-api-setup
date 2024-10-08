import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// example of upgrades - add to/edit this as you like!
const upgrades = [
  {
    id: 1,
    name: "Auto-Clicker",
    cost: 100,
    increase: 5,
  },
  {
    id: 2,
    name: "Enhanced Oven",
    cost: 500,
    increase: 30,
  },
  {
    id: 3,
    name: "Cookie Farm",
    cost: 1000,
    increase: 70,
  },
  {
    id: 4,
    name: "Robot Baker",
    cost: 2000,
    increase: 150,
  },
  {
    id: 5,
    name: "Cookie Factory",
    cost: 5000,
    increase: 400,
  },
  {
    id: 6,
    name: "Magic Flour",
    cost: 10000,
    increase: 900,
  },
  {
    id: 7,
    name: "Time Machine",
    cost: 20000,
    increase: 2000,
  },
  {
    id: 8,
    name: "Quantum Oven",
    cost: 50000,
    increase: 5000,
  },
  {
    id: 9,
    name: "Alien Technology",
    cost: 100000,
    increase: 12000,
  },
  {
    id: 10,
    name: "Interdimensional Baker",
    cost: 200000,
    increase: 25000,
  },
  {
    id: 11,
    name: "Mother Of All Cookies",
    cost: 1000000000,
    increase: 200000000,
  },
];
app.get("/", (req, res) => {
  res.send("ye");
});

app.get("/upgrades", (req, res) => {
  try {
    res.status(200).json(upgrades);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(8080, () => {
  console.log("running on star wars port");
});
