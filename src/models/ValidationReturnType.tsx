class ValidationReturntype{
    message: string;
    isValid: boolean;

    constructor(isValid:boolean, message:string){
        this.isValid = isValid;
        this.message = message;
    }
}