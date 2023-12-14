let fs = require('fs')

// fs.writeFile('test3.txt', 'This is my first file using node!!', (error, file)=>{
// 	if (error) console.log(error)
// 	console.log("File has been created!!!!")
// });


fs.readFile('test3.txt', (error, file_content)=>{
	if (error) console.log(error)
	console.log(file_content)
});