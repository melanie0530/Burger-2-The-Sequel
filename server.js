var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require("body-parser")
var exphbs = require('express-handlebars');
var db = require("./models");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
require("./controllers/burger_controller")(app);

db.sequelize.sync({force: true}).then(function(){
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
