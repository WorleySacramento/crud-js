//criando servidor na maquina

/*var http =require ('http');

http.createServer(function(req,res){

    res.end("Gerenciador Financeiro");

}).listen(8080);
*/


const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("Gerenciador Finanças");
});

app.get("/contato", function(req,res){
    res.send("Pagina Da Empresa");
});

app.get("/contato", function(req,res){
    res.send("Pagina Do Blog");
});

app.get("/contato", function(req,res){
    res.send("Pagina de contato");
});

//localhost
app.listen(8080);