let expresss = require('express')
let multer = require('multer')
let app = expresss()


let storage = multer.diskStorage({
	destination: function(req, file, callback) { callback(null, './uploads')},
	file_name:function(req, file, callback) { callback(null, file.originalname)},
})

app.use('/static', expresss.static('assets'))

app.get('/', function(req, res)
{
	res.send("<img src='/static/images/flower.jpg' height='200'>")
})




app.listen(3000, ()=> {console.log('Connected on 3000 Port')})


