import { AppDataSource } from "../data-source.js"
import { User } from "../entity/User.js"
import bcrypt from 'bcrypt'
const userRepository = AppDataSource.getRepository(User)
type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
const hashPassword = (plainPass: string) => {
    const saltRound = 10;
    let hashPassword = ''
    bcrypt.genSalt(saltRound, function (err, salt) {
        bcrypt.hash(plainPass, salt, function (err, hash) {
            hashPassword = hash
        });
    });
    return hashPassword
}
export const createUser = async (newUser: UserType) => {
    //hash password before save....
    const user = { ...newUser }
    user.password = hashPassword(user.password)
    await userRepository.save(user)
}
export const findUserById = async (id:number) => {
    const user = await userRepository.findOneBy({id:id})
    return user
}
export const findAllUser = async () => {
    const allUser = await userRepository.find({ take: 10000 })
    return allUser
}
export const deleteUser = async (id:number) => {
    const user = await userRepository.findOneBy({id:id})
    userRepository.remove(user)
 
}