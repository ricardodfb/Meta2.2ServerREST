const cors = require("cors");
const express = require("express");
const proyectosRutas = require("./routes/proyectosRutas.js");
const donadoresRutas = require("./routes/donadoresRutas.js");
const donatariosRutas = require("./routes/donatariosRutas.js");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/proyectos",proyectosRutas);
app.use("/donadores",donadoresRutas);
app.use("/donatarios",donatariosRutas);
app.listen(3000, ()=> {
    console.log("Server en puerto 3000");
});