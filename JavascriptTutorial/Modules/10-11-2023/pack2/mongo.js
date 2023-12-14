import http from 'http'
import express from 'express'


const server = http.createServer();


server.on('request', (req, response) => {
	response.end("file_content")
});


server.listen(3307);

