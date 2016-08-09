var mongoose = require("mongoose");
var Feat = mongoose.model("Feat");

module.exports = (function(){
   return{
       getAll: function(callback){
           Feat.find({}, function(err, feats){
               if(err){
                   console.log(err);
               }else{
                   console.log(typeof feats)
                   callback(feats);
               }
           })
       },
       index: function(req, res){
           Feat.find({}, function(err, feats){
               if(err){
                   console.log(err);
               }else{
                   res.json(feats);
               }
           })
       },
      create: function(req){
         var data = req;
        //  console.log(req)
         var feat = new Feat({name: data.name, type: data.type,
             description: data.description, prerequisites: data.prerequisites, prerequisite_feats: data.prerequisite_feats, benefit: data.benefit, normal: data.normal, special: data.special, source: data.source, fulltext: data.fulltext, teamwork: data.teamwork, critical: data.critical, grit: data.grit, style: data.style, performance: data.performance, racial: data.racial, companion_familiar: data.companion_familiar, race_name: data.race_name, note: data.note, goal: data.goal, completion_benefit: data.completion_benefit, multiples: data.multiples, suggested_traits: data.suggested_traits, prerequisite_skills: data.prerequisite_skills, panache: data.panache, betrayal: data.betrayal, targeting: data.targeting, esoteric: data.esoteric, stare: data.stare, weapon_mastery: data.weapon_mastery, item_mastery: data.item_mastery, armor_mastery: data.armor_mastery, shield_mastery: data.shield_mastery});
         feat.save(function(err){
            if(err){
               console.log(err);
            }
         })
      },
      update: function(newData){
          Feat.update({name: newData.name}, newData, function(data){
              
          })
      }
   }
})();
