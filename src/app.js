import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express()

// cors hamara fruntend agar doosre port par chal raha h or backand doosre par to cors ek path provide karata h dono ko request ka mutual sharing ka liye 
 
app.use(cors({
    origin : process.env.CORS_ORIGIN
}))
app.use(express.json({
    limit:"16kb"
}))

app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())
export default app