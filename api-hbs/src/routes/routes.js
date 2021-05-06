//Configuración de las rutas
import express from "express";

//On Off DB MONGO
import on_off from "../database/services/mongodb";
// write on or ON to turn up the database, off or OFF to turn off the database
//AND write 1 for db local and 2 for db mongo Atlas (web).
on_off("ON", 1);

const router = express.Router();

//importar controllers
const { renderIndex, sendMail } = require("../controllers/controllers.js");

//Import rutes test
const { testDbPost, testDbGet } = require("../controllers/controller.test");

//User Login
const {
  createData,
  showData,
  upgradeData,
  login,
  private_,
  verifyToken,
  dropAll,
  delateData,
} = require("../controllers/controller.auth");

const { findById} = require("../controllers/controller.data");

router.get("/", renderIndex);

router.post("/envio", sendMail);

//test rutes
router.get("/testing", testDbGet);
router.post("/testing", testDbPost);

//Auth rutes
//Datos usuario
//Crear la ruta para el control Crear datos y llamar la funcion en especifico de ese documento
router.post("/new", createData);
//obtner o mostrar los datos de la BD
router.get("/new", showData);
//actualizar datos de la BD
router.put("/actualizar/:id", upgradeData);
//eliminar datos de la Db
router.delete("/borrar/:id", delateData);
//Login en la app
router.post("/login", login);

//borramos todo
router.delete("/borrado", dropAll);

//Rutas privadas
router.get("/private", verifyToken, private_);

router.get("/findById/:id", findById);


module.exports = router;
