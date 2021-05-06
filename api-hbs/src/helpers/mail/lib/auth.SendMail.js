//Auth
const config = require("../../../private/emailData.json");
//Modules
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const emailTemplateSource = fs.readFileSync(
  path.join(__dirname, "templates/auth.correo.hbs"),
  "utf8"
);

async function AuthSendMail(data) {
  //Data es un objeto que recibe los datos obtenidos por el frontend y son pasados a la plantilla de HBS
  await console.log(data);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({
    name: data.name,
    lastName: data.lastName,
    telephone: data.telephone,
    country: data.country,
    city: data.city,
    adress: data.adress,
    email: data.email,
  });
  const mailOptions = {
    from: "sendersemail@example.com",
    to: data.email,
    subject: "Incription to wallet website",
    html: htmlToSend,
    attachments: [
      {
        filename: "pixlr-bg-result.png",
        path: path.join(__dirname, "images/pixlr-bg-result.png"),
        cid: "LOGO",
      },
    ],
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
}

module.exports = AuthSendMail;
