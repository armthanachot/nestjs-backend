import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { SALTORROUND, SECRETKEY } from "../../constants/config";
const passwordHash = async (password) => {
  const hashed = await bcrypt.hash(password, SALTORROUND);
  return hashed;
};

const passwordCompare = async (password, hash) => {
  const isCorrect = await bcrypt.compare(password, hash);
  return isCorrect;
};

const jwtSign = async ({ email }) => {
  const token = await jwt.sign({  email }, SECRETKEY, {
    expiresIn: "120s",
  });
  return token;
};

const jwtVerify = async (token) => {
  try {
    const correct = await jwt.verify(token, SECRETKEY);
    console.log(correct);
    return correct;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export { jwtSign, jwtVerify, passwordCompare, passwordHash };
