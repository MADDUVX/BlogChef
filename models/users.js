import {Schema, model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    unique:true,
    required:true
},
password:{
    type:String,
    required: true
},
createdAt : {type:Date,default :Date.now},
lastLoggedIn: {type:Date,default:Date.now},
isAdmin:{
    type:Boolean,
    default:false
}
});

userSchema.pre("save",function(next){ // using regular function so we can use this keyword which cannot be done using arrow functions
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();
})

const User = model("User", userSchema);

export default User;