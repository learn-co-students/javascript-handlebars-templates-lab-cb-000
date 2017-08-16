function initForm(){
	var formTemplate = document.getElementById("recipe-form-template").innerHTML;
	var formHTML = Handlebars.compile(formTemplate);
	document.getElementsByTagName("main")[0].innerHTML = formHTML({"submitAction" : "createRecipe()"})
}

function createRecipe(){
	var recipe = recipeVals();
	var recipeTemplate = document.getElementById("recipe-template").innerHTML;
	var recipeHTML = Handlebars.compile(recipeTemplate)
	document.getElementById("main").innerHTML = recipeHTML(recipe)
}

function updateRecipe(){
	var recipe = recipeVals();
	var recipeTemplate = document.getElementById("recipe-template").innerHTML;
	var recipeHTML = Handlebars.compile(recipeTemplate)
	document.getElementById("main").innerHTML = recipeHTML(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function recipeVals(){
	var ingredientsNodes = document.getElementsByName("ingredients")
	var ingredients = []
	for (var i=0; i<ingredientsNodes.length; i++){
		if (ingredientsNodes[i].value){
			ingredients.push(ingredientsNodes[i].value)
		}
	}
	var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup(){
	Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
	Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})