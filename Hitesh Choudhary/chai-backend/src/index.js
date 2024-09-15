// require('dotenv').config({path: './env'}); // inconsistency of code
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {  
    app.listen(process.env.PORT, () => {
        console.log(`Server listening at port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed: ", err);
})

/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Application not able to talk to database: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.port}`);
        })
    } catch(error) {
        console.error("ERROR: ", error);
        throw error
    }
})() 
*/
