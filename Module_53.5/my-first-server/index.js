const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=> {
    res.send('hello from server');
})

app.get('/data', (req, res)=>{
    res.send('more data coming soon');
})

app.listen(port , ()=>{
    console.log('server is running');
})