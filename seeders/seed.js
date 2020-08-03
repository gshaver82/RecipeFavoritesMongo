let mongoose = require("mongoose");
let db = require("../models/recipesModel");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes_DB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  // useUnifiedTopology: true
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
console.log(db);
console.log(recipesSeed);
// console.log(recipesSeed[0].date);
// console.log(recipesSeed[0].ingredients);
// console.log(recipesSeed[0].cookingActions);
console.log(recipesSeed[0].cookingActions[0].ingredients);


async function seedAsyncFunction() {
  try {
    console.log("deleteMany");
    await db.deleteMany();
    console.log("create");
    await db.insertMany(recipesSeed);
    console.log("created");
    await db.findOneAndUpdate(
      {
        recipeName: "pancake"
      },
      {
        $set: {
          recipeName: "new! pancake"
        }
      }
    );   
    console.log("findOneAndUpdated"); 
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
}
seedAsyncFunction();
