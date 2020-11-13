const { route } = require("../routes");
const { Pool } = require("pg");
const { response } = require("express");

// contar a mi base de datos psotgresql
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin123",
  database: "firstapi",
  port: "5432",
});

// funciones
const getUserById = async (req, res) => {
  console.log("codID es como se recibe por ROUTE" + req.params.codID);
  const data = await pool.query("select * from users where id = $1", [
    req.params.codID,
  ]);
  res.status(200).json(data.rows);
};

const getUsers = async (req, res) => {
  const data = await pool.query("select * from users");
  res.status(200).json(data.rows);
};

const createUser = async (req, res) => {
  const { username, email } = req.body;
  const data = await pool
    .query("INSERT INTO users(username, email) VALUES($1, $2)", [
      username,
      email,
    ])
    .catch((error) => console.log(error));
  res.send("logrado");
  //   res.json({
  //     message: "logrado",
  //     body: {
  //       user: { usernam, email },
  //     },
  //   });
};
const deleteUsers = (req, res) => {
  pool.query("DELETE FROM users WHERE id = $1", [req.params.codID]);
  res.json(`Usuario ${req.params.codID} Eliminado satisfactoriamente`);
};

const updateUser = async (req, res) => {
  const id = req.params.codID;
  const { username, email } = req.body;

  const response = await pool
    .query("UPDATE users SET username=$1,email=$2 where id=$3 ", [
      username,
      email,
      id,
    ])
    .catch((error) => console.log(error))
    .then(res.send("done"));
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUsers,
  updateUser,
};
