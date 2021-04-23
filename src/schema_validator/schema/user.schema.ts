import * as joi from "joi"

const USERCREATE = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().min(8).required(),
}).required()

export {
    USERCREATE
}