import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import {connectDB} from "./lib/db.js";
import {app, server } from "./lib/socket.js";
import path from "path";




dotenv.config();


const PORT = process.env.PORT;
const _dirname = path.resolve();

app.use(express.json()); // for parsing application/json
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
}));


app.use("/api/auth", authRoutes);
console.log("Registered Routes:", app._router.stack.map(layer => layer.route?.path).filter(path => path));
app.use("/api/message", messageRoutes);

//for production
if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(_dirname, "../frontend/dist")));

    app.get("*", (req,res)=> {
    res.sendFile(path.join(_dirname , "../frontend", "dist" , "index.html"));
    })
}

server.listen(PORT , () => {
    console.log("Server is running on PORT: " + PORT);
    connectDB();
}
);
