const db = require("../models/recipesModel");
var path = require("path");

module.exports = function (app) {
    app.get("/all", (req, res) => {
        db.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });






};

// async function seedAsyncFunction() {
//     try {
//         await db.deleteMany();
//         await db.insertMany(recipesSeed);

//         process.exit(0);
//     } catch (err) {
//         console.log(err);
//     }
// }
// seedAsyncFunction();