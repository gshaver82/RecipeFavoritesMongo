const recipesModel = require("../models/recipesModel");
var path = require("path");

module.exports = function (app) {
    app.get("/empty", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};