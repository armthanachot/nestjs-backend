import * as bcrypt from 'bcrypt';
import {SALTORROUND} from "../../constants/config"
const passwordHash = async(password)=>{
    const hashed = await bcrypt.hash(password,SALTORROUND)
    return hashed
}

const passwordCompare= async (password,hash)=>{
    const isCorrect = await bcrypt.compare(password,hash)
    return isCorrect
}

export {
    passwordHash,
    passwordCompare
}
