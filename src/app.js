import express from "express";
import morgan from "morgan";
import cors from "cors";
import RoutesNotes from './routes/notes.routes'

//--- Setings ---
//Crear servidor con express
const app = express();
//Declarar variable para el puerto del servidor(3000)
app.set("port", process.env.PORT || 4000);

//--- Middlewares
//Perimitir que otros servidores se conecten
//Lista para poder configurar el cors
const configCors = {};
app.use(cors(configCors));
//Morgan para poder ver petciones
app.use(morgan("dev"));
//Permitir que la app pueda recivir json
app.use(express.json());
//Permitir que la aplicacion entienda formularios html
app.use(express.urlencoded({ extended: false }));

//--- Routs ---
app.get("/", (req,res) => {
    res.json({ message: "Bienvenido a la API" });
});
//Rutas de las notas
app.use("/api/notes",RoutesNotes)

export default app;
