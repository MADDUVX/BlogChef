import express from "express";
import home from "./router/home/"
import admin from "./router/admin/";
import api from "./router/api/";
import { join, dirname } from "path";
import { URL, fileURLToPath } from "url";
import morgan from "morgan";
import compression from "compression";
import session from "express-session";
import {createWriteStream} from "fs";
import connectDB from "./db";


const app = express();


const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const logFile = join(_dirname, "blogchef.log");

//app.use(morgan(":method - :url - :date - :response-time ms"));//to log our request method url,date response time 
/*app.use(morgan(":method - :url - :date - :response-time ms",{
  stream: createWriteStream(logFile, {flags:"a"}),
}));// to save the logs in a logfile*/


//middlewares
app.use(express.static(join(_dirname,"public","client")));
app.use(compression());

app.use("/admin", session({
  name:"sessId", //use a generic name which is considered as a good code practice
  resave:false, //mandatory
  saveUninitialized:true, //mandatory
  secret: process.env.sessionSecret,
  cookie:{
    httpOnly: true,
    maxAge:18000000,
    secure : app.get("env")==="production" ?true:false,
  }
}));
app.use("/public", express.static(join(_dirname, "public")));
app.use(express.urlencoded({extended: false})); //false-disables qs library and uses query strings for express
app.use(express.json()).set("view engine", "pug");


app.use("/admin", admin);
app.use("/api",api);
// we are using this after admin and api routes because our root route i.e., "/*" is intercepting all 
// requests and that include /admin as well because we are passing all down stream routes
app.use("/", home); 


app.post("/admin/approve",(req,res)=>res.redirect("/admin/dashboard"));


Promise.all([connectDB()])
.then(app.listen(3000, () => console.log("Server started")))
.catch(error=>{
  console.error(`MongoDB Atlas Error ${error}`);
  process.exit();
})



//app.listen(3000, () => console.log("Server started"));

// //Login
// app
//     .get("/admin/login", (req, res) => {
//     //res.sendFile(join(_dirname,"views","login.html"));
//     res.render("login");
//   })
//   .post("/admin/login", (req, res) => {
//     const {email,password} =req.body;
//     if(email==="saikumar123@gmail.com" && password==="saikumar"){
//     req.session.user="Sai Kumar"; //Storing data in the session
//     return res.redirect("/admin/dashboard");
//   }
//         res.redirect("/admin/login");
//   });

//Dashboard

// app.get("/admin/dashboard",protectRoute("/admin/login"),);
// app.get("/admin/logout", (req, res) => {
//   delete req.session.user;
//   res.redirect("/admin/login")
// });


