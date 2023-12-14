let expresss = require('express')
let multer = require('multer')
let app = expresss()


let storage = multer.diskStorage({
	destination: function(req, file, callback) { callback(null, './uploads')},
	filename:function(req, file, callback) { callback(null, "ok.jpg")},
})



app.get('/', function(req, res)
{
	return res.sendFile(__dirname + '/index.html')
})



let upload_test_file = multer({storage:storage}).single('test_file')

app.post('/file_upload', function(req, res)
{

	upload_test_file(req, res, function(err){
		if (err){
			return res.send('Couldnot be upload the file!!')
		}
		return res.send('Successfully Uploaded!!')
	})
})






app.listen(3000, ()=> {console.log('Connected on 3000 Port')})