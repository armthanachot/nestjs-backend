import { Request, Response, NextFunction } from 'express';


const permissionVerify = async(role:any) =>{
    return async (req:Request,res:Response,next:NextFunction)=>{
        console.log(req.headers);
        console.log(req.route);
        return next()
    }
}

export {
    permissionVerify
}