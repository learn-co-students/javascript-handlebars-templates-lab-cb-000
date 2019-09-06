function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li class="ingredient">' + this.name + "</li>");
  });
  loadRecipeForm();
}

function loadRecipeForm() {
  var newFormContents = {
    onsubmit: "createRecipe()",
    ingredients: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  };
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate(newFormContents)
}

function createRecipe() {
  //event.preventDefault();
  var name = document.getElementsByName("name")[0].value;
  var description = document.getElementsByName("description")[0].value;
  var ingredients = document.getElementsByName("ingredients");

  var recipeContents = {
    name: name,
    description: description,
    ingredients: []
  };

  for (let i = 0; i < ingredients.length; i++) {
    recipeContents.ingredients.push({name: ingredients[i].value});
  }

  var displayRecipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = displayRecipeTemplate(recipeContents);
}

function displayEditForm() {
  var name = document.getElementById("name").innerHTML;
  var description = document.getElementById("description").innerHTML;
  var ingredients = document.getElementsByClassName("ingredient");

  var editFormContents = {
    onsubmit: "updateRecipe()",
    name: name,
    description: description,
    ingredients: []
  };

  for (let i = 0; i < ingredients.length; i++) {
    editFormContents.ingredients.push({name: ingredients[i].innerHTML});
  }

  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate(editFormContents)
}

function updateRecipe() {createRecipe();}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
