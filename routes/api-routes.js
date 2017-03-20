// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {

  // Get all burgers
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      // console.log(results);
      var hbsObject = {
        burgers: results
      };
      res.render("index", hbsObject);
    });
  });

  // Add a burger
  app.post("/create", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.redirect("/");
    });

  });

  //update the devoured flag for a specified burger

  app.post("/update", function(req, res){
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(){
      res.redirect("/");
    });

  });


};




