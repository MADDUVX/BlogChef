export default(req, res) => res.render("dashboard",{
    user:req.session.user,
    posts:[{
      id:1,
      author: "Joe M",
      title: "I Love Express",
      content: "Express is a wonderful framework for building Node.js apps"
    },{
      id:2,
      author: "Smith",
      title: "I Love Pug",
      content: "Have u tried pug , it's a wonderful templating Language"
    }]
  });