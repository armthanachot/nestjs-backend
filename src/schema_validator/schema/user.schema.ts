import * as joi from "joi"
import { number, string } from "joi"

const USERCREATE = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().min(8).required(),
    user_type:number().required()
}).required()

export {
    USERCREATE
}