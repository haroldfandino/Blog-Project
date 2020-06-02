const express = require("express");
const app = express();
const request = require("request");

app.use (express.urlencoded({extended:true}));
app.use (express.static("public"));
app.set ("view engine", "ejs");

app.get ("/", function(req, res){
  res.render ("home");
});

app.post ("/", function(req, res){

});

app.listen (3000, function(){
  console.log("Server on port 3000");
});
