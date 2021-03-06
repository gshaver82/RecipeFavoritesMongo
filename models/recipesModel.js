const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//TODO cookingActions should require ingredients from This schema, probably done from front end when entry is added to DB
//when user adds a recipe they first select ingredients 
//and then when selecting cooking actions are limited to current ingredients

const recipesSchema = new Schema({
    // date: {
    //     type: Date,
    //     required: true,
    //     default: Date.now
    // },
    //total ingredient list
    recipeName: String,
    ingredients: [
        {
            //example flour
            name: String,
            //example 2
            quantity: Number,
            //example cups
            units: String
        }
    ],
    cookingActions: [
        {
            //action of the ingredients, example mix or bake or whip or whatever
            action: {
                type: String,
                required: true
            },
            //ingredient list for only this cooking action
            ingredients: [
                {
                    //example flour
                    name: String,
                    //example 2
                    quantity: Number,
                    //example cups
                    units: String
                }
            ],
        }
    ]
}
);

const Workout = mongoose.model("firstrecipes_DB", recipesSchema);

module.exports = Workout;