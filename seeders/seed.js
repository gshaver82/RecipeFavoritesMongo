let mongoose = require("mongoose");
let recipesModeldb = require("../models/recipesModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/firstrecipes_DB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let recipesSeed = [
  {
    // date: Date.now,
    recipeName: "pancakes",
    ingredients: [
      {
        name: "flour",
        quantity: 2,
        units: "cups"
      },
      {
        name: "eggs",
        quantity: 2,
        units: "Grade A egg"
      },
    ],
    cookingActions: [
      {
        action: "mix",
        ingredients: [
          {
            name: "flour",
            quantity: 2,
            units: "cups"
          },
          {
            name: "eggs",
            quantity: 2,
            units: "Grade A egg"
          },
        ],
      }
    ]
  }, {
    // date: Date.now,
    recipeName: "pancakes Alt recipe",
    ingredients: [
      {
        name: "flour",
        quantity: 4,
        units: "cups"
      },
      {
        name: "fake eggs",
        quantity: 8,
        units: "egg beaters"
      },
    ],
    cookingActions: [
      {
        action: "mix",
        ingredients: [
          {
            name: "flour",
            quantity: 4,
            units: "cups"
          },
          {
            name: "fake eggs",
            quantity: 8,
            units: "egg beaters"
          },
        ],
      }
    ]
  }
];

async function seedAsyncFunction() {
  try {
    await recipesModeldb.deleteMany();
    await recipesModeldb.insertMany(recipesSeed);
    // console.log("seed files inserted");
    //----------
    //this is not needed for the seed, but tessted find and update and this works
    // await recipesModeldb.findOneAndUpdate(
    //   {
    //     recipeName: "pancakes"
    //   },
    //   {
    //     $set: {
    //       recipeName: "new! pancake"
    //     }
    //   }
    // );   
    // console.log("findOneAndUpdated"); 
    //----------
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
}
seedAsyncFunction();
