/*Modulos*/

const express = require("express") ;
const morgan = require("morgan") ;
const server = express() ;

/*Puerto*/

const port = 5000 ;

/*Base de Datos*/

require("./database.js") ;

/*Middleware*/

server.use(express.json()) ;
server.use(morgan("dev")) ;
server.use(express.urlencoded({extended: false})) ;

/*Routes*/

const maquinas = require("./routes/maquinas") ;
server.use("/maquinas", maquinas) ;

/*Route Root*/

server.get('/', (req, res) => {
    res.send("Servidor de Base de Datos BACK END")
})
S
/*Middleware error 404*/

server.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/error404.html')
}) ;

server.listen(port, () => console.log("Server on port", port)) ;