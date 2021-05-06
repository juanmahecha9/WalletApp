//Controlador testeto base de datos

//Modules
import mongoose from "mongoose";

//schema testing databese
import test from "../model/test/mode.test";

const indexCtrlTest = {};

//Rutas de prueba para la base de datos
indexCtrlTest.testDbPost = async (req, res) => {
  const dataTestPost = new test(req.body);
  await dataTestPost.save();
  res.send("Save in db");
};

indexCtrlTest.testDbGet = async (req, res) => {
  const dataTestGet = await test.find();
  console.log("Finding...");
  res.send(dataTestGet);
};

//Exportar
module.exports = indexCtrlTest;
