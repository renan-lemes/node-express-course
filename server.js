const express = require('express'); //da acesso a bliblioteca expressa na pasta node_modules
const app = express(); // instancia um construtor
const bodyParser = require('body-parser') //bodyParser é uma outra variavel puxando de node_modules
app.use(bodyParser.json());

const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]
//------------------------------------------------------------------------------//
//                           requisição  GET                                    //
//------------------------------------------------------------------------------//
// dois pontos são usados ​​como variáveis ​​que podem ser visualizado no 
app.get('/users/:id', function (req, res) {// req para selecionar ou acessar o valor  // ja res inserir o inserção
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })

})
app.get('/users/:id', function (req, res) { //função que cria novo localhost com o id de mark 
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})
//------------------------------------------------------------------------------//

//------------------------------------------------------------------------------//
//                               POST                                           //
//------------------------------------------------------------------------------//
app.post('/login', function (req, res) {
    // Normalmente as senhas são criptografadas usando algo como bcrypt antes de enviar para o banco de dados
    const username = req.body.username;
    const password = req.body.password;

    // Isso deve vir do banco de dados 
    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSecret';

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})
//------------------------------------------------------------------------------//

app.listen(8000, function () { //iniciara um servidor na porta local 8000 no caso da url( http://localhost:8000 )
    console.log('server is running')
})