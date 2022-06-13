var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

const users = [
    {id: 1, nombre: 'Ivan'},
    {id: 2, nombre: 'Ana Maria'},
    {id: 3, nombre: 'Oscar Ivan'}
]

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    console.log(res);
    console.log(req);
    res.send('Is logged')
})

app.get('/json', function (req, res) {
    res.json({
        data: 'API Get Works!'
    })
});

app.get('/alarm/active', (req, res)=>{
    res.json({
        alarm:{
            active: true
        }
    })
})

app.get('/light/actve', (req, res)=>{
    res.json({
        light:{
            active: true
        }
    })
})

app.get('/getparams/:year/:id', function(req, res){
    res.send(req.params)
});

app.get('/getqueryparams/:year/:id', function(req, res){
    res.send(req.query)
});

app.get('/company/:id', function (req, res) {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send('Usuario no existe');
    } else {
        res.send(user);
    }
    
});
