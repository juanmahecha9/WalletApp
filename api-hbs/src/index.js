// Configuración rapida de proyecto Node.js by juanmahecha9
// Modules
import express from "express";
import morgan from "morgan";
import path from "path";
import exphbs from "express-handlebars";
import cors from "cors";
import mongoose from "mongoose";

// Files
import router from "./routes/routes.js";


const app = express();

app.set("port", process.env.PORT || 4000);
// concatenar el directorio de las vistas de motores de plantillas
// Load static files
app.use(express.static(path.join(__dirname, "/views/dist/test")));
app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'html');

app.use(express.urlencoded({extended: false}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin: "http://localhost:4200"}));
app.use(router);

app.listen(app.get("port"), () => {
  console.log("server running at http://localhost:" + app.get("port"));
});
