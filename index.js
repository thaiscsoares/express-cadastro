const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const cadastros = {}

app.get('/emails', (req,res) => {
    res.send(cadastros)
})

app.post('/cadastrar', (req,res)=> {
    console.log(req.body);
    cadastros[req.body.nome] = req.body.email
    res.send({mensagem : 'Cadastro realizado com sucesso'})
})

app.listen(3000, () => console.log("Aplicação iniciada"));