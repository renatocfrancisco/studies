import Express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () =>{
    console.log('Conexão com o Banco feita');
})

const app = Express();
app.use(Express.json())
routes(app);

export default app