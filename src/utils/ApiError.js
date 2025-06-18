class ApiError extends Error{
 constructor(
        statuscode,
        message="something went wrong",
        errors=[],
        stack=""

    ){
        super(message)
        this.statuscode=statuscode,
        this.data=null,
        this.sucess=false,
        this.errors= errors
    }
}
export {ApiError}