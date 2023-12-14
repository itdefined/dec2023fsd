import express from 'express';
import formidable from 'formidable';
import mysql from 'mysql';
import mv from 'mv';

const app = express();


let initial_data = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container mt-3">
  <h2 class='text-center'>Register Here!</h2>
  <form action="/" method='get' enctype='multipart/form-data'>
    <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" 
             class="form-control" 
             id="email" 
             placeholder="Enter email" 
             name="email">
    </div>
    <div class="mb-3">
      <label for="pwd">Password:</label>
      <input type="password" 
      class="form-control" 
      id="pwd" 
      placeholder="Enter password" 
      name="pswd">
      <input type="file" 
      class="form-control" 
      name="profile_pic">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>

</body>
</html>
`


var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '1234',
  database : 'student'
});


app.get('/', (req, res) => { res.send(initial_data)})
app.get('/contact', (req, res) => { res.send('contact page')})
app.get('/about', (req, res) => { res.send('about page')})
app.get('/other', (req, res) => { res.send('other page')})



app.post('/', (req, res, next) => {
	  const form = formidable({});
	  form.parse(req, (err, fields, files) => {
	    if (err) {
	      next(err);
	      return;
	    }

	    let email = fields['email'][0]
	    let password = fields['pswd'][0]
	    let temp_path = files.profile_pic[0].filepath



	    let new_path = process.cwd()+'/'+files.profile_pic[0].originalFilename

	    console.log("file new path ==>", new_path)
	    mv(temp_path, new_path, function(err) {if (err) throw (err)})


    	let qry1 = `INSERT INTO reg_data 
    	            values email_id='${email}',  
    	            password='${password}' profile_pic=${files.profile_pic[0].originalFilename}`

        console.log("our query==> ", qry1)
		connection.query(qry1, function (error, results, fields) {
		  if (error) throw error;
		      console.log(results.length, typeof(results))
		      if (results.length !=0 ){
		      	res.send('You are in!!!');
		      }
		      else{
		      	res.send('You have not yet Registered!!!');
		      }
		});	
  });
});





app.listen(3000);