const recipesModeldb = require("../models/recipesModel");
var path = require("path");

module.exports = function (app) {
    app.get("/jsonall", async (req, res) => {
        try {
            data = await recipesModeldb.find({})
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

};