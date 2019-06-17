function init() {
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString(ingredient);
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var formTemplate = document.getElementById("recipe-form-template");
  var template = Handlebars.compile(formTemplate.innerHTML);

  document.getElementById("main").innerHTML = template({ submitAction: "createRecipe()" });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipeName = document.getElementsByName("recipe-name")[0].value;
  var description = document.getElementsByName("description")[0].value;
  var ingredients = document.getElementsByName("ingredients");
  var array = [];
  for (var i = 0; i < ingredients.length; i++) {
    array.push(ingredients[i].value);
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template({ name: recipeName, description: description, ingredients: array })
}

function updateRecipe() {
  var recipeName = document.getElementsByName("recipe-name")[0].value;
  var description = document.getElementsByName("description")[0].value;
  var ingredients = document.getElementsByName("ingredients");
  var array = [];
  for (var i = 0; i < ingredients.length; i++) {
    array.push(ingredients[i].value);
  }
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template({ name: recipeName, description: description, ingredients: array });
}

function displayEditForm() {
  var recipeName = document.getElementById("title").innerText;
  var description = document.getElementById("description").innerText;
  var ingredients = document.getElementsByClassName("ingredients");

  var array = [];
  for (var i = 0; i < ingredients.length; i++) {
    array.push(ingredients[i].innerText);
  }

  var formTemplate = document.getElementById("recipe-form-template");
  var template = Handlebars.compile(formTemplate.innerHTML);
  document.getElementById("main").innerHTML = template({ name: recipeName, description: description, ingredients: array, submitAction: "updateRecipe()"});
}
