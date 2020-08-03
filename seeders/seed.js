let mongoose = require("mongoose");
let db = require("../models/recipesModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes_DB", {
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
        Name: "flour",
        quantity: 2,
        Units: "cups"
      },
      {
        Name: "eggs",
        quantity: 2,
        Units: "Grade A egg"
      },
    ],
    cookingActions: [
      {
        action: "mix",
        ingredients: [
          {
            Name: "flour",
            quantity: 2,
            Units: "cups"
          },
          {
            Name: "eggs",
            quantity: 2,
            Units: "Grade A egg"
          },
        ],
      }
    ]
  }, {
    // date: Date.now,
    recipeName: "pancakes Alt recipe",
    ingredients: [
      {
        Name: "flour",
        quantity: 4,
        Units: "cups"
      },
      {
        Name: "fake eggs",
        quantity: 8,
        Units: "egg beaters"
      },
    ],
    cookingActions: [
      {
        action: "mix",
        ingredients: [
          {
            Name: "flour",
            quantity: 4,
            Units: "cups"
          },
          {
            Name: "fake eggs",
            quantity: 8,
            Units: "egg beaters"
          },
        ],
      }
    ]
  }
];

async function seedAsyncFunction() {
  try {
    await db.deleteMany();
    await db.insertMany(recipesSeed);
    // console.log("seed files inserted");
    //----------
    //this is not needed for the seed, but tessted find and update and this works
    // await db.findOneAndUpdate(
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
