let expresss = require('express')
let app = expresss()

app.get('/home', function (req, res) {
    res.send('<h1>Hello Welcome to Express JS</h1>')
})

app.get('/about', function (req, res) {
    res.send('This is about page')
})

app.get('/contact', function (req, res) {
    res.send('This is contact page')
})

app.get('/user', function (req, res) {
    res.send('Welcome User')
})

// app.get('/user/:name/', function (req, res) {
//     res.send('Hello Im '+ req.params.name)
// })

app.get('/user/:data([0-9]{3})', function (req, res) {
    res.send('The value is' + req.params.data * 2)
})



app.get('/user/:name/:age', function (req, res) {
    res.send('Hello Im '+ req.params.name + " and I am "+req.params.age+ " Years Old")
})



app.get('*', function (req, res) {
    res.send('Inalid Path')
})







app.listen(3000)