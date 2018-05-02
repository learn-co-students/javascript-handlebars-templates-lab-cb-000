let recipe = {};

function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = formTemplate();
  document.getElementById('centeredDiv').innerHTML += result;

  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString("<li>" + this.name + "</li>");
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
}

function displayEditForm()
{
  var editFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var result = editFormTemplate();
  document.getElementById('editRecipeForm').innerHTML += result;
}

function updateRecipe()
{
  var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  var recipeResult = recipeTemplate(recipe);
  document.getElementById('recipeTemplateDiv').innerHTML += recipeResult;
}

function createRecipe()
{
    recipe['name'] = document.getElementById("name").value;

    recipe['description'] = document.getElementById("description").value;

    recipe['ingredients'] = [];

    let ingredientsArray = document.getElementsByName("ingredients");

    for(let i = 0; i < ingredientsArray.length; i++)
    {
          recipe['ingredients'].push({name: ingredientsArray[i].value});
    }

    var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
    var recipeResult = recipeTemplate(recipe);
    document.getElementById('recipeTemplateDiv').innerHTML += recipeResult;

    var result = document.getElementById("end-process-message").innerHTML += "Recipe created!!!";
    return result;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
