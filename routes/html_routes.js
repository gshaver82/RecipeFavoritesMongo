const recipesModel = require("../models/recipesModel");
var path = require("path");

module.exports = function (app) {
    
    app.get("/jsonall", async (req, res) => {
        try {
            data = await recipesModel.find({})
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};