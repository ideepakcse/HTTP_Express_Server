//INSTALLATION OF EXPRESS
// npm init
//npm install express

const express = require('express');

const PORT = 3000;

const server = express(); // create a express server object

// respond with "hello world" when a GET request is made to the server
server.get('/home', (request, response) => {
    response.send("hello world");
   
});

// respond with "json object" when a GET request is made to the server
server.get('/page', (request, response) => {
    response.json({
        message: "welcome to my home page"
    });
   
});

// respond with "json object" when a POST request is made to the server
server.post('/home', (request, response) => {
    response.json({
        message: "This is a POST request"
    });
    
});
server.get('/homepage',(request,response)=>{
    response.send('HTTP_Module_Server/index.html');
})
server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});