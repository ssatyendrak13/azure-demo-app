import express from "express";
import dotenv from "dotenv";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

// app.get('/', (req, res)=>{
//     res.send("Hello from backend")
// })

// app.get('/login', (req, res)=>{
//     res.send("This is login page");
// })

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// production script 
app.use(express.static("./frontend/build"))
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
})

const port = process.env.PORT || 3000;
app.listen(port , ()=>{
    console.log(`Server running at port ${port}`)
})