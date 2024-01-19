export default (req, res) => {
    const {email,password} =req.body;
    if(email==="saikumar123@gmail.com" && password==="saikumar"){
    req.session.user="Sai Kumar"; //Storing data in the session
    return res.redirect("/admin/dashboard");
  }
        res.redirect("/admin/login");
  }