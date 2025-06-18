const asynchandler = (fun)=> async(req,res,next)=>{
    try {
        await fun(req,res,next)

        
    } catch (error) {
        res.status(error.code || 500).json({
            sucess:false,
            message:err.message
        })
    }



    
    
}
export { asynchandler}