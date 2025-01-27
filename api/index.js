import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelsRoute from '../api/routes/hotels.js'
import authRoute from '../api/routes/auth.js'
import usersRoute from '../api/routes/users.js'
import roomsRoute from '../api/routes/rooms.js'
import cookieParser from "cookie-parser"
import cors from "cors"
const app=express();
dotenv.config();



mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!")
})

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)




app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500
    const errorMessage = err.message || "Something went wrong!"

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack:err.stack,
    });
});

mongoose.set('strictQuery',false)

const connect= async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongoDB.")
    }catch(err){
        throw err;
    }
}
app.listen(8000,()=>{
    connect();
    console.log("Connected to backend.")
})