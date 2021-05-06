const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("../data/data.model");
//Esquema para la coleccion
//Esquema para la coleccion
const bcrypt = require("bcrypt");

const user = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    balance: {
      type: Number,
    },
    lastSingIn: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//encriptar contraseña
/* el esquema user, posee las funciones de save y se le pasa una funcion que tiene por parametro la siguiente,
 al llamar bcrypt, se generan unos salts me genera un numero de cifrados, entre mayor el numero mas tiempo tardara 
 el proceso por defecto son 10 y esto nos devuelve una promesa donde dependiendo de si se genera/ la variable
 salts nos llamara un hash el cual es el cifrado completo de la contraseña y por ultimo se le pasa la password
 y el numeor de salts lo cual nos devolvera otra promesa y si se cumple se reasigna el valor del password en 
 el objeto y sigue con la siguiente funcion, de no ser exitosa la encriptacion, nos genera un error */

user.pre("save", function (next) {
  var newUser = this;
  // only hash the password if it has been modified (or is new)
  if (!newUser.isModified("password")) return next();

  bcrypt
    .genSalt(3)
    .then((salts) => {
      bcrypt
        .hash(this.password, salts)
        .then((hash) => {
          this.password = hash;
          next();
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

//Desncriptar la clave
/* En esta instancia se crea un metodo para poder desencriptar la contraseña y poder comparar, 
se crea una funcion que recibe dos parametros los cuales son el error y un callback
se llama el modulo de bcrypt y se le pasa la contraseña que ingresa el usuario y la contraseña
que esta contenida en la base de datos, y a esto se le paan dos valores mas los cuales son
un error y un boolean, si hay error se retorna el, si no se retorna el boolean el cual 
sera falso o verdadero segun la clave que se ingrese */
user.methods.compararPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) return cb(err);
    cb(null, match);
  });
};

module.exports = mongoose.model("dataUser", user);
