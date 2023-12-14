let expresss = require('express')
let app = expresss()

let customer = require('./customer.js')
// let vendor = require('./vendor.js')
// let staff = require('./staff.js')
// let admin = require('./admin.js')


app.get('/', function (req, res) {
    res.send('<h1>Hello Welcome to Express JS</h1>')
})

app.get('/about', function (req, res) {
    res.send('This is about page')
})

app.get('/contact', function (req, res) {
    res.send('This is contact page')
})

app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)
app.use('/c', customer)
app.use('/c', customer)
app.use('/staff', customer)




app.listen(3000)