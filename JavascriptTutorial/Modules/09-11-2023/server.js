let http = require('http')
let fs = require('fs')


const server = http.createServer();


server.on('request', (req, response) => {
	fs.readFile('test3.txt', (error, file_content) => {
		if (error) console.log(error);
		response.end(file_content)
	});
});


server.listen(3307);

