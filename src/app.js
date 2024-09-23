import express from "express";
import cors from "cors";
import cookieParser from "cookieParser";

const app = express();

app.use(
  cors({
    // origin:process.env.CORS_Originff
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //extra key words not compulsory

app.use(
  express.urlencoded({
    //extra key words not compulsory
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"))       //as we created public folder for public assets to store files 

app.use(cookieParser())


// app.get("/",(req,res)=>{
// res.send("Hello")
// })

// app.listen(4000,()=>{
// console.log("this app is running on port : 4000");

// })

export default app;
