const recipesModeldb = require("../models/recipesModel");

module.exports = function (app) {



    app.post("/api/create", async (req, res) => {
        try {
            await recipesModeldb.create(req.body);
            console.log("API inserted recipe");
        } catch (err) {
            console.log(err);
        }
    });
};