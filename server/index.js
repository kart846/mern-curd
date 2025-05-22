
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import route from "./routes/userroute.js"
import cors from "cors"
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
          console.log("DB connected successfully");
          app.listen(PORT,() =>{
            console.log(`server is running on port:${PORT}`);
          });
          })
        .catch((error) => console.log(error))
app.use("/api", route); 
        
      

        