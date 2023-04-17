const experss = require("express");
const app = experss();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Olá!");
});

app.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`);
});
