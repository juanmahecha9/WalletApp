//Modules
import mongoose from "mongoose";
//Files functions
import emailSend from "../helpers/mail/emailSender";
import testing from "../helpers/test/testing";


//controllers
const indexCtrl = {};

//Aquí se colocan las funciones que realizan en cada peticion
indexCtrl.renderIndex = (req, res) => {
  res.render("index")
};

indexCtrl.sendMail = (req, res) => {
  const { name, lastName, country, city, adress, telephone, email } = req.body;

  const object = {
    name: name,
    lastName: lastName,
    country: country,
    city: city,
    adress: adress,
    telephone: telephone,
    email: email,
  };
  //testing(object);
  emailSend(object);
  let response = "";
  if (object == null) {
    response = "Error en los datos";
  } else {
    response = "Data ok.";
  }
  res.send(response);
};

//Exportar
module.exports = indexCtrl;
