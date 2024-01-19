const protectApi=(req,res,next)=>{
    const authorization= req.header("Authorization");
    if(authorization){



        return next();
    }
    return res.sendStatus(401);
}

export default protectApi;