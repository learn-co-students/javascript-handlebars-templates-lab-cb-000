function init() {
  //show edit form on initialization
  displayEditForm()

  //handlebars initialization
  Handlebars.registerHelper('displayIngredient', (recipe) => {
    return recipe.name
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', "")

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: [
      {name: document.getElementsByName("ingredients")[0].value},
      {name: document.getElementsByName("ingredients")[1].value},
      {name: document.getElementsByName("ingredients")[2].value},
      {name: document.getElementsByName("ingredients")[3].value},
      {name: document.getElementsByName("ingredients")[4].value},
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementById("recipe-render").innerHTML += result;
  document.getElementById("form-render").innerHTML = ""
}

function displayEditForm() {
  //hides "recipe-template"
  document.getElementById("recipe-render").innerHTML = ""
  //adds "recipe-form" from "recipe-form-template" to the HTML body
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var formResult = formTemplate(null) //no handlebars required for form template
  document.getElementById("form-render").innerHTML += formResult;
}

function updateRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: [
      {name: document.getElementsByName("ingredients")[0].value},
      {name: document.getElementsByName("ingredients")[1].value},
      {name: document.getElementsByName("ingredients")[2].value},
      {name: document.getElementsByName("ingredients")[3].value},
      {name: document.getElementsByName("ingredients")[4].value},
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipe);
  document.getElementById("recipe-render").innerHTML += result;
  document.getElementById("form-render").innerHTML = ""
}
