import { schemaValidator } from "src/utils/app"
import {USERCREATE} from "../schema/user.schema"

const create = async (user)=>{
    const validated = await schemaValidator(user,USERCREATE)
    return validated
}

export {
    create
}
