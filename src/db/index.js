import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const data_base = async()=>{
  try{
    const data_complete = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`database is conected Host: ${data_complete.connection.host}`)

  }
  catch(error){
    console.log("a error is occured",error);
    process.exit(1)
  }

}

export default  data_base