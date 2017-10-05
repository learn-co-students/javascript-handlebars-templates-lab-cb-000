function loadForm() {
  var form = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(form)
  var result = template({action: "createRecipe()"})
  document.getElementsByTagName("main")[0].innerHTML += result
}

function displayEditForm() {
  var form = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(form)
  var name = document.getElementById("name").innerText
  var description = document.getElementById("description").innerText
  var ingredientItems = document.getElementsByName("ingredientItems")
  var ingredients = []
  for (var i = 0; i < ingredientItems.length; i++) {
    ingredients.push(ingredientItems[i].innerText)
  }

  var result = template({
    action: "updateRecipe()",
    name: name,
    description: description,
    ingredients: ingredients
  })
  document.getElementById("main").innerHTML = result
}

function createRecipe() {
  var values = getRecipeValues()
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)

  var result = template({
    name: values['name'],
    description: values['description'],
    ingredients: values['ingredients']
  })

  document.getElementById("main").innerHTML = result
}

function updateRecipe() {
  var values = getRecipeValues()
  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)

  var result = template({
    name: values['name'],
    description: values['description'],
    ingredients: values['ingredients']
  })

  document.getElementById("main").innerHTML = result
}

function getRecipeValues() {
  var name = document.getElementById('name').value
  var description = document.getElementById('description').value
  var ingredients = document.getElementsByName("ingredients")
  var ingredientList = []
  for (var i = 0; i < ingredients.length; i++) {
    if(ingredients[i] !== "") {
      ingredientList.push(ingredients[i].value)
    }
  }

  return {
    name: name,
    description: description,
    ingredients: ingredientList
  }
}

function init() {
  Handlebars.registerPartial(
    'recipeDetailsPartial',
    document.getElementById("recipe-details-partial").innerHTML
  )

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientItems'>" + ingredient + "</li>")
  })

  Handlebars.registerPartial(
    'recipeFormPartial',
    document.getElementById("recipe-form-partial").innerHTML
  )

  loadForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
