const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const db = require('./db')

const sever = http.createServer(app);

sever.listen(port,hostname, () => {
    console.log(`server is running at http://${hostname}:${port}/`);
});

app.get('/',(req,res) => {
    res.send("Hello from my express server!");
});

app.get('/friends', (req,res) => {
    let htmlString = ``;
    htmlString += `<ul>`;
    for(let friend of db){
        htmlString += `<li>${friend.name}</li>`;
    }
    htmlString += `</ul>`;
    res.send(htmlString);
})
app.get('/friends/:handle', (req,res) => {
   const {handle} = req.params;
   const friend = db.find(f => f.handle === handle);
   let htmlData = ``;
   htmlData += `<h1>${friend.name}</h1>`
   htmlData += `<h2>${friend.handle}</h2>`
   res.send(htmlData);
});