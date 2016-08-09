var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var http = http.Server(app);
var fs = require("fs");


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
var feats = require("./server/controllers/feats.js");

// fs.readFile("./client/static/Text/Feats.txt", "utf8", function(err, data){
//     data = data.replace('\r', '');
//     var entries = data.split('\n');
//     var fields = entries[0].split('\t');
//     console.log(entries.length)
//     var wrong = [];
//     for(var i = 1; i < entries.length; i++){
//         var sections = entries[i].split('\t');
//         var featEntry = {};
//         for(var j = 1; j < sections.length; j++){
//             featEntry[''+fields[j]] = sections[j];
//         }
//         feats.create(featEntry);

//     }
// })

// var allFeats
// feats.getAll( function(data){
//     allFeats = data;
//     // console.log("all feats", allFeats)
//     for(var idx in allFeats){
//         var feat = allFeats[idx];
//         console.log(idx)
//         if(feat.prerequisite_feats.includes("Style")){
//             feat.style = 1;
//             console.log(feat);
//         }
//         feats.update(feat);
//     }
// });

app.listen(6174, function(){});
