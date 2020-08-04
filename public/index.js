
async function handleFormSubmit(event) {
    event.preventDefault();
    console.log("inside button clicker");

    let recipeData = {
        recipeName:"default",
        ingredients: [{}],
        cookingActions: [
            {
                action:"default",
                ingredients: [{}],
            },
        ],
    };

    recipeData.recipeName = document.querySelector("#recipeName").value.trim();
    console.log(recipeData);
    recipeData.ingredients[0].name = document.querySelector("#recipeName").value.trim();
    recipeData.ingredients[0].quantity = document.querySelector("#recipeName").value.trim();
    recipeData.ingredients[0].units = document.querySelector("#recipeName").value.trim();

    recipeData.ingredients[0].name = document.querySelector("#recipeName").value.trim();
    recipeData.ingredients[0].quantity = document.querySelector("#recipeName").value.trim();
    recipeData.ingredients[0].units = document.querySelector("#recipeName").value.trim();

    recipeData.cookingActions[0].action = document.querySelector("#recipeName").value.trim();

    recipeData.cookingActions[0].ingredients[0].name = document.querySelector("#recipeName").value.trim();
    recipeData.cookingActions[0].ingredients[0].quantity = document.querySelector("#recipeName").value.trim();
    recipeData.cookingActions[0].ingredients[0].units = document.querySelector("#recipeName").value.trim();

    console.log(recipeData);
}


document.querySelector(".addRecipeButton").addEventListener("click", handleFormSubmit);
