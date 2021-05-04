const path = require("path");
const express = require("express");
const app = express();

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// config express static server
const staticServerPath = "./public"; // relative to the root of the project
app.use(express.static(staticServerPath));

// API

app.get("/response-a", (req, res) => {
  const response = { result: "ok" };
  res.json(response);
});

app.get("/response-b", (req, res) => {
  const response = `<!DOCTYPE html>
  <html lang="es">
    <head>
        <title>Mis pruebas con Express</title>
    </head>
    <body>
        <header>
            <h1>Esta es una página de prueba</h1>
        </header>
    </body>
  </html>`;
  console.log(response);
  res.send(response);
});

app.get("/response-c", (req, res) => {
  const getRandom = (max) => {
    return Math.ceil(Math.random() * max);
  };
  const randomNumber = getRandom(10);
  if (randomNumber % 2 === 0) {
    console.log(randomNumber);
    res.redirect("http://youtube.com");
  } else {
    console.log(randomNumber);
    res.redirect("http://instagram.com");
  }
});
const users = [];

app.get("/response-d", (req, res) => {
  users.push({ user: req.query.userNumber });

  const userNumber = parseInt(req.query.userNumber);
  if (userNumber >= 1 && userNumber < 3) {
    console.log(req.query.userNumber);
    res.status(200).json({ result: "ok" });
  } else {
    console.log(req.query.userNumber);
    res.status(404).json({ result: "error: invalid query param" });
  }
  console.log(users);
});
