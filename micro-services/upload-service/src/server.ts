import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import path from "path/win32";


const app = express();
const PORT = process.env.PORT
app.use(express.urlencoded({ extended: true }));



app.use(helmet());
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string).then(() => console.log("Connected to MongoDB")).catch(err => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => {
    res.send("Upload Service is running");
}
);


async function startServer() {
    try{
        app.listen(PORT, () => {
            console.log(`Upload Service is running on port ${PORT}`);
        });
    }catch(err){
        console.error("Failed to start server:", err);
        throw new Error("Server start failed");
    }
}

startServer();

