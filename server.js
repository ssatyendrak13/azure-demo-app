import express from "express";
import dotenv from "dotenv";
import path from 'path';

const app = express();
dotenv.config();

// app.get('/', (req, res)=>{
//     res.send("Hello from backend")
// })

// app.get('/login', (req, res)=>{
//     res.send("This is login page");
// })

// production script 
app.use(express.static("./frontend/build"))
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
})

const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`Server running at port ${port}`)
})