let expresss = require('express')

let app = expresss()





app.get('/', abc(), function(req, res, next){
	console.log("Step 2")
	res.send('Hello!!!')
	next()
})


app.use('/', function(req, res){
	console.log("Well Done!!")
})



app.listen(3001)