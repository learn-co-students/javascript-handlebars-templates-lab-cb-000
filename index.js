function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(){


         return new Handlebars.SafeString("<li>" + this.name + "</li>");

  });
  var recipe = {

    name: "Food",
    description: "food description",
    ingredients: [
      "ing1", "ing2", "ing3", "ing4", "ing5"
    ]
  }


  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var recipeResult = recipeTemplate(recipe);
  console.log(recipeResult);
  var main = document.getElementById('main');
  main.innerHTML = recipeResult;





}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
});

function displayEditForm(){
  var recipe = {

    name: "Food",
    description: "food description",
    ingredients: [
      "ing1", "ing2", "ing3", "ing4", "ing5"
    ]
  }


  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var recipeResult = recipeTemplate(recipe);
  console.log(recipeResult);
  var main = document.getElementById('main');
  main.innerHTML = recipeResult;



}


function createRecipe() {

  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var in1 = document.getElementById('ingredient_1').value;
  var in2 = document.getElementById('ingredient_2').value;
  var in3 = document.getElementById('ingredient_3').value;
  var in4 = document.getElementById('ingredient_4').value;
  var in5 = document.getElementById('ingredient_5').value;

  var newRecipe = {
    name: name,
    description: description,
    ingredients: [{
        amount: "one",
        name: in1
      },
      {
        amount: "two",
        name: in2
      },
      {
        amount: "three",
        name: in3
      },
      {
        amount: "four",
        name: in4
      },
      {
        amount: "five",
        name: in5
      }

    ]
  }





  console.log(newRecipe);
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  console.log("Here is the template fxn: " + recipeTemplate);
  var result = recipeTemplate(newRecipe);
  var recipesDiv = document.getElementById('recipes');
  recipesDiv.innerHTML += recipeTemplate(newRecipe);
}

function updateRecipe(){

  createRecipe();
}
