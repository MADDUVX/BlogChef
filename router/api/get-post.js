export default (req,res)=>{
    const postId = req.params.postId;
    res.send({post:postId});
};