//src

const express = require("express");
const app = express();

//middlewares , antes de ejecutar rutas
app.use(express.json()); //convierte todo a json
app.use(express.urlencoded({ extended: false })); //convierte datos de un formulario

//routes
app.use(require("../routes/index"));


app.listen(4000);
console.log("llego");
