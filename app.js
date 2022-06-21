var express = require('express');
var app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));

const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Example app listening on port ${port}`)
});

const users = [
    {id: 1, nombre: 'Ivan'},
    {id: 2, nombre: 'Ana Maria'},
    {id: 3, nombre: 'Oscar Ivan'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
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
