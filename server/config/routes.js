var feats = require("./../controllers/feats.js");


module.exports = function(app){
   app.get("/feats", function(req, res){
       console.log("hit the route")
      feats.index(req,res);
   });
}