const express = require("express");
const app = express();
const request = require("request");
const lodash = require("lodash");

app.use(express.urlencoded({extended:true}));
app.use("/", express.static(__dirname + "/public"));
app.use("/posts", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

let posts = [];
let postLink

app.get("/", function(req, res){
  res.render("home", {
    posts: posts,
    postLink: postLink
  });
});

app.post("/", function(req, res){

});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/newpost", function(req, res){
  res.render("newpost");
});

app.post("/newpost", function(req, res){

  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  }

  posts.push(post);

  res.redirect("/");
});

app.get("/posts/:postName", function (req, res){
  const requestedTitle = lodash.lowerCase(req.params.postName);

  posts.forEach(function(post) {
    const storedTitle = lodash.lowerCase(post.title);

    if (storedTitle === requestedTitle){
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
  });

});

app.listen (3000, function(){
  console.log ("Server on port 3000");
});
