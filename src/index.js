import mongoose from "mongoose"
import data_base from "./db/index.js"
import {DB_NAME} from "./constants.js"
import dotenv from "dotenv"
 dotenv.config({
    path:'./env'

})
 data_base()
 .then(()=>{
    app.on( "error",(error)=>{
        console.log("error is occured",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`server is running on port : ${process.env.PORT}`);
    }
 })
 .catch((error)=>{
    console.log("MONGODB connection error",error);
    process.exit(1)

 })