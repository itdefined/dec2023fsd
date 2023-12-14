import mysql from 'mysql'
import http from 'http'


const server = http.createServer();

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '1234',
  database : 'world'
});
 


server.on('request', (req, response) => {
		response.writeHead(200, {'Content-Type':'text/html'})

		let qry1 = `select * from city limit 10;`
		let data = ''

		connection.query(qry1, function (error, results, fields) {
		  if (error) throw error;
		  console.log('The solution is: ', results);
    	  results.forEach(el => data+=`<h3>${el.Name}</h3>`)

		  response.write(data)
		  response.end()
		});	

});


server.listen(3307);

