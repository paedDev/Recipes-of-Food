import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();






app.get("/", (req,res) =>{
    res.render("index.ejs")
})







app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
    
})