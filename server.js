const express = require('express');
const fs = require('fs');

var app = express();

app.use((req , res , next) => {

    let now = new Date().toString();
    let log = `${now}: ${req.method} ${ req.url}`;
    fs.appendFile('server.log', log+'\n' , (error) => {
        if(error)
          console.log(error);
    });
    console.log(log);
    next();
});

app.get('/' , (req , res) => {

 res.send({
     message:'sucess',
     code : 200
 })
});

app.listen(3000 ,'localhost', () => {
    console.log('sever up on port 3000');
});