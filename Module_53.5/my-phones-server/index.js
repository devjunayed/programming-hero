const express = require("express");
const app = express();

const port = 5000;



app.get("/", (req, res)=>{
    res.send('Hey there!');
});



app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
});