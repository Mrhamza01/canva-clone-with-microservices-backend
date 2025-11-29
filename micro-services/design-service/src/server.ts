import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";


const app = express();
const PORT = process.env.PORT


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI as string).then(() => console.log("Connected to MongoDB")).catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Design Service is running");
}
);


async function startServer() {
    try{
        app.listen(PORT, () => {
            console.log(`Design Service is running on port ${PORT}`);
        });
    }catch(err){
        console.error("Failed to start server:", err);
        throw new Error("Server start failed");
    }
}

startServer();

