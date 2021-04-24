import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken"
import {SALTORROUND,SECRETKEY} from "../../constants/config"
const passwordHash = async(password)=>{
    const hashed = await bcrypt.hash(password,SALTORROUND)
    return hashed
}

const passwordCompare = async (password,hash)=>{
    const isCorrect = await bcrypt.compare(password,hash)
    return isCorrect
}

const jwtSign = async ({username,role})=>{
    const token = await jwt.sign({username,role},SECRETKEY,{expiresIn:"120"})
    return token 
}

export {
    passwordHash,
    passwordCompare,
    jwtSign
}
