import mongoose from "mongoose";

const connectDB = ()=>mongoose.connect(process.env.MongoConnectURL,
    {useNewUrlParser:true,
     useUnifiedTopology:true,
    }
    );

    export default connectDB;