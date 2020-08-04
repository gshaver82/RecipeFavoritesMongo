const recipesModeldb = require("../models/recipesModel");

module.exports = function (app) {
    app.get("/jsonall", async (req, res) => {
        try {
            data = await recipesModeldb.find({})
            res.json(data);
        } catch (err) {
            console.log(err);
        }
    });


    app.post("/api/create", async (req, res) => {
        try {
            await recipesModeldb.create(req.body);
            console.log("API inserted recipe");
        } catch (err) {
            console.log(err);
        }
    });
};