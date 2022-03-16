const express = require('express');
const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' })
})

app.get('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `hello, ${name}!`});
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10)> 17) {
    res.status(200).json({ "message": `Hello, ${name}!` })
  } else if (parseInt(age, 10) <= 17) {
    res.status(401).json({ "message": "Unauthorized" })
  }
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}))

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
})