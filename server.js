import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get('/', (req, res)=>{
    res.send("Hello from backend")
})

app.get('/login', (req, res)=>{
    res.send("This is login page");
})

const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`Server running at port ${port}`)
})