// Pulling friends data
var friends = require("../data/friends");

// Exporting function
module.exports = function(app) {

// Pull jquery array of friends list
app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// app.post("/api/friends", function(req, res) {
//     res.json(friends);
//   });

};