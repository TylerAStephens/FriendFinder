// Made sure path npm package was active
var path = require("path");

// Exporting links to HTML pages
module.exports = function(app) {
    
// Express function getting html files
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });

      app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });  
};