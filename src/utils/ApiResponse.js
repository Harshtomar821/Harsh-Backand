class ApiResponse{
    constructor(StatusCode,data,message="success"){
        this.StatusCode=StatusCode,
        this.data=data,
        this.message=StatusCode<400
    }
}