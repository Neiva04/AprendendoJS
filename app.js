    /* Aprendendo com node */
/*
import http from 'http';
http.createServer(function(req, res){
    res.end("Servidor com Node.js")
}).listen(9091);
//protocolo http
console.log('Servidor Online.');
*/

    /* Usando Express */

import express from 'express';
const app = express();

app.get("/", function(req, res){
    res.send("Server Working!\n Welcome!");
    console.log('/ acssesed!');
})//get "/" é para renderizar a pagina, e o send é para enviar um texto para a aplicação

app.get("/rota1", (req, res)=>{//get("/qualquerRota", (req, res)=>{})
    res.send("This is the Route 1");
    console.log('Rota 1 acssesed!');
})//http://localhost:port/Route

app.get("/parametro/:parametro1/:parametro2", (req, res)=>{
    res.send("<h1>Parameter 1: " + req.params.parametro1+"</h1>"+"<h2>Parameter 2: "+req.params.parametro2+"</h2>"+"<p>This is the Parameter route</p>");//permite receber dados da requisição
    //a função send só pode ser usada 1 única vez
    console.log('Parameter Route acssesed!');
})

app.get("/html", (req, res)=>{
    res.sendFile("C:/Users/neiva/Desktop/Eng.Comp/Programação/JavaScript/Aprendendo/index.html");

    console.log("HTML Route acssesed!");
})
app.listen(9091, ()=>{//listen(port, (){})
    console.log("Server Working on http://localhost:9091 \n Other Links http://localhost:9091/rota1 \n http://localhost:9091/parametro/a/b ");
})//SEMPRE por ultimo


