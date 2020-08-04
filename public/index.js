
async function handleFormSubmit(event) {
    event.preventDefault();
    console.log("inside button clicker");

    let recipeData = {
        recipeName: "default",
        ingredients: [{}, {}],
        cookingActions: [
            {
                action: "default",
                ingredients: [{}, {}],
            },
        ],
    };

    recipeData.recipeName = document.querySelector("#recipeName").value.trim();

    recipeData.ingredients[0].name = document.querySelector("#ingredient1").value.trim();
    recipeData.ingredients[0].quantity = document.querySelector("#quantity1").value.trim();
    recipeData.ingredients[0].units = document.querySelector("#unit1").value.trim();

    recipeData.ingredients[1].name = document.querySelector("#ingredient2").value.trim();
    recipeData.ingredients[1].quantity = document.querySelector("#quantity2").value.trim();
    recipeData.ingredients[1].units = document.querySelector("#unit2").value.trim();

    recipeData.cookingActions[0].action = document.querySelector("#CookingActionStep1").value.trim();

    recipeData.cookingActions[0].ingredients[0].name = document.querySelector("#ingredient1Step1").value.trim();
    recipeData.cookingActions[0].ingredients[0].quantity = document.querySelector("#quantity1Step1").value.trim();
    recipeData.cookingActions[0].ingredients[0].units = document.querySelector("#unit1Step1").value.trim();

    recipeData.cookingActions[0].ingredients[1].name = document.querySelector("#ingredient2Step1").value.trim();
    recipeData.cookingActions[0].ingredients[1].quantity = document.querySelector("#quantity2Step1").value.trim();
    recipeData.cookingActions[0].ingredients[1].units = document.querySelector("#unit2Step1").value.trim();

    console.log(recipeData);
    
    $.ajax({
        url: "/api/create",
        data: recipeData,
        method: "POST",
    });
    alert("recipe Added");
}

document.querySelector(".addRecipeButton").addEventListener("click", handleFormSubmit);
