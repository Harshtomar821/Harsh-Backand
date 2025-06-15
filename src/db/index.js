import mongoose from "mongoose"
import {DB_NAME} from "../constants.js";
const Connect_DB = async ()=>{
    try{
   const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
   console.log(`connection is completed!!  DB HOST: ${ConnectionInstance.connection.host}`)


    }
    catch(error){
  console.log("this is error", error);
   process.exit(1)
    }
}

export default Connect_DB