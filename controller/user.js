import User from "../models/users";


export const signUpAdmin = async ({name, email,password})=>{
try{
    await User.create({name,email, password, isAdmin:true});
    return Promise.resolve();
}catch (error){
    return Promise.reject({error});
}
}