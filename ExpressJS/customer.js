let expresss = require('express')
let router = expresss.Router()


router.get('/', function (req, res) {
    res.send('<h1>Hello Welcome to Customer Page</h1>')
})

router.get('/Login', function (req, res) {
    res.send('<h1>Hello Welcome to lOGIN JS</h1>')
})

router.get('/Register', function (req, res) {
    res.send('This is Reg page')
})

router.get('/Cart', function (req, res) {
    res.send('This is Cart page')
})

router.get('/purchase-products', function (req, res) {
    res.send('This is Purchase page')
})

router.get('/Orders', function (req, res) {
    res.send('This is Orders page')
})



module.exports = router