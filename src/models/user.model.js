import mongoose,{Schema} from "mongoose"
import { JsonWebTokenError } from "jsonwebtoken"// token create krta h user varify ka 
import bcrypt from "bcrypt" // code ko bcrypt karti


const UserSchema = new Schema ({
      username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        index:true
        
      },
       email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        index:true
        
      },
       Fullname:{
        type:String,
        require:true,
        
        lowercase:true,
        index:true
        
        
      },
      avatar:{
        type:String,
        required:true
      },
       coverimage:{
        type:String,
        
        
        
      },
       watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
       ],
       password:{
        type:String,
        require:[true,"this is required"]
       },

   refrenceToken:{
    type:String
   }

      

},{
    TimeStamps:true
})


//  password ko bcypt kar rahe h 

 UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password =  bcrypt.hash(this.password,10)
    }
    next()
  })

    // password check kar rahe h ki sahi h ki nhi 
 
 UserSchema.methods.isPasswordCorrect=async function(password){
   return  await bcrypt.compare(password,this.password)
 }


 // refresh and acess token generate

UserSchema.methods.Generate_Access_Token= function(){
  jwt.sign(
    // kya kya information aap rakho
    {
      _id:this._id,
      email:this.email,
      username:this.username,
      Fullname:this.Fullname

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }

  )
  
 }
  UserSchema.methods.Generate_Refresh_Token= function(){

    jwt.sign(
    // kya kya information aap rakho
    {
      _id:this._id,
      email:this.email,
      username:this.username,
      Fullname:this.Fullname

    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    
  )

 }







export const User = mongoose.model("User",UserSchema)