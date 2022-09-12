const express = require("express");
const http = require("http");

const app = express();
app.use(express.static("public"));

// Insere dados
//app.post();

// Buscar dados
app.get("/", (req, res) => {
    return res.send("testando");
});

// Alterar dados
//app.patch();

// Remover dados
//app.delete();

app.listen(4002, () => console.log("Servidor em 4002"))
