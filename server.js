const express = require('express'); //da acesso a bliblioteca expressa na pasta node-express-course
const app = express(); // instancia um construtor

const mockUserData = [
    {name : 'Mark' },
    {name : 'Jill'}
]
app.get('/users' , function(req, res){
    res.json({
        success : true,
        message : 'successfully got users. Nice!', 
        users: mockUserData
    })

})



app.listen(8000, function () { //iniciara um servidor na porta local 8000 no caso da url( http://localhost:8000 )
    console.log('server is running')
})