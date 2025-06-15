import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import Connect_DB from './db/index.js';
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
 Connect_DB()



























// import express from "express";
// const app=express()
// ( async ()=>{
//     try{
//          mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//          app.on("error",(error)=>{
//             console.log("this is error",error);
//             throw error;
//          })

//    app.listen(process.env.PORT,()=>{
//     console.log(`app are listen of ${process.env.PORT}`)

//    })
            
      
//     }
//     catch(error){
        
//         console.log("error in connection the database", error);

//     }

// })()