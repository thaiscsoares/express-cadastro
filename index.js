const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const cadastros = {}

app.get('/emails', (req,res) => {
    res.send(cadastros)
})

app.get('/emails/:name', (req,res) => {
    let email = cadastros[req.params.name]
    res.send(email)
})

app.post('/cadastrar', (req,res)=> {
    if (!req.body.name || !req.body.email){
        return res.status(400).send({mensagem: "Nome e email são obrigatórios"})
    }
    cadastros[req.body.name] = req.body.email
    res.send({mensagem : 'Cadastro realizado com sucesso'})
})

app.listen(3000, () => console.log("Aplicação iniciada"));