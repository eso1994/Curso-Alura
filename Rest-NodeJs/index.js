const express = require("express");
const app = express();
app.listen(8000, () => console.log("servidor rodando na porta 8000."));

app.get("/atendimentos", (req, res) => res.send('você está na rota atendimentos'));