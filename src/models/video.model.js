 import mongoose, { Schema } from "mongoose"
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
  const VideoSchema=  new mongoose.Schema({

    videoFile:{
        type:String,
        require:true
    },
  thumbail:{
        type:String,
        require:true
    },
  
    title:{
        type:String,
        require:true
    },
  
    duration:{
        type:String,
        require:true
    },
  
    views:{
        type:String,
        require:true,
        default:0
    },
    description:{
        type:String,
        require:true
    },
  isPublic:{
    type:Boolean,
    require:true

  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
   
  
  


  },{
    timestamps:true
  }
)
//ye aggrigate paginate ek operation perform ke liye ek tareeka h 

 VideoSchema.plugin(mongooseAggregatePaginate)
  export const Video= mongoose.model("Video",VideoSchema)