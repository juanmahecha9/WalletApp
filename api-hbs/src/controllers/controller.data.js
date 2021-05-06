const User = require("../model/models/auth/user.model");
import mongoose from "mongoose";

const wallet = {};

wallet.findById = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user);
};

wallet.upgradeDatabyId = async (req, res) => {
  const id = req.params.id;
  let nuevosDatos = req.body;
  await User.findByIdAndUpdate(id, nuevosDatos, (err, dataActualizada) => {
    if (err) {
      res.status(500).send({
        message: "Server error...",
      });
    } else {
      if (!dataActualizada) {
        res.status(200).send({
          message: "Not is possible update data...",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Success...",
          producto: nuevosDatos,
          statusCode: 200,
        });
      }
    }
  });
};

module.exports = wallet;
