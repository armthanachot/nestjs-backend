import * as joi from "joi"

const USERCREATE = joi.object({
    firstname:joi.string().required(),
    lastname:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().required(),
}).required()

export {
    USERCREATE
}