function init() {
  var recipeFormtemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeFormhtml = recipeFormtemplate();
  document.getElementsByTagName("main")[0].innerHTML += recipeFormhtml;

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(){
    if(!this == " "){
      return new Handlebars.SafeString(this)
  }
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




function displayForm() {
  var recipeFormtemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var recipeFormhtml = recipeFormtemplate();
  document.getElementsByTagName("main")[0].innerHTML += recipeFormhtml;
}

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients")

  var recipe = {
    name: name,
    description: description,
    ingredients: [
      ingredients[0].value,
      ingredients[1].value,
      ingredients[2].value,
      ingredients[3].value,
      ingredients[4].value
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;

}

function displayEditForm() {

  var name = document.getElementById("recipe-name").value;
  var description = document.getElementsByTagName("p")[0].value;
  var ingredientsList = document.getElementsByTagName("li")

  var ingredients = []
  for(var i=0;i<ingredientsList.length;i++) {
    ingredients.push(ingredientsList[i].value)
  }

  var recipe = {name, description, ingredients}

  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate(recipe);
}


function updateRecipe() {
  var recipe = "something that I don't know how to do."
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
}
