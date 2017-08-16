function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });

  var formTemplate = document.getElementById("recipe-form-template").innerHTML;

  var template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({"submitFunction": "createRecipe()"});
}

function displayEditForm() {
  var ingredientsValues = document.getElementsByName("ingredientsList").innerHTML;
  var recipe = {name: document.getElementById("name").innerHTML,
                description: document.getElementById("description").innerHTML,
                ingredients: ingredientsValues,
                submitFunction: "updateRecipe()"};

  var editFormTemplate = document.getElementById("recipe-form-template").innerHTML;

  var template = Handlebars.compile(editFormTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function getRecipeData() {
  var ingredientsObjects = document.getElementsByName("ingredients");
  var ingredientsValues = [];
  for (var i = 0; i < ingredientsObjects.length; i++) {
    if (ingredientsObjects[i].value !== '') {
      ingredientsValues.push(ingredientsObjects[i].value);
    }
  }

  var recipe = {name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                ingredients: ingredientsValues};
  return(recipe)
}

function createRecipe() {
  var recipe = getRecipeData();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;

  var template = Handlebars.compile(recipeTemplate);
  document.getElementsByTagName("main")[0].innerHTML += template(recipe);
}

function updateRecipe() {
  var recipe = getRecipeData();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;

  var template = Handlebars.compile(recipeTemplate);
  document.getElementsByTagName("main")[0].innerHTML += template(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
})
