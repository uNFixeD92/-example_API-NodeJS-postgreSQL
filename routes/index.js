//router

const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUserById,
  deleteUsers,
  updateUser,
} = require("../controllers/index.controller");
const rutas = Router();

// rutas
rutas.get("/user/:codID", getUserById);
rutas.get("/users", getUsers);
rutas.post("/createusers", createUser);
rutas.delete("/user/:codID", deleteUsers);
rutas.put("/user/:codID", updateUser);

module.exports = rutas;
