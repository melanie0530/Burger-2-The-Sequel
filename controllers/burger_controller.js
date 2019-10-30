var db = require("../models");
module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burgers.findAll({}).then(function (data) {
      let dbBurgers = {
        Burgers: data
      };
      res.render("index", dbBurgers);
      // console.log(dbBurgers)
    })
      .catch(function (err) {
        throw (err)
      });
  });
  app.post("/api/burgers/", function (req, res) {
    console.log(req.body)
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    })
      .then(function (updatedBurger) {
        res.json(updatedBurger)
      });
  });

  app.put("/api/burgers/:id", function(req, res) {

    db.Burgers.update({
        devoured: true
      }, {
        where: {
          id: req.params.id
        }
    }).then(function (updatedBurger, err) {
        res.json(updatedBurger);
        if (err) {
          console.log(err)
        }
      })
})
};
