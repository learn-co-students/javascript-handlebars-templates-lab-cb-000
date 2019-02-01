function init() {
  //put any page initialization/handlebars
  //initialization here

  //custom helper example
 /* Handlebars.registerHelper('ingredients_list',  function() {
    if (this.state === "closed") {
        return new Handlebars.SafeString(this.body)
    } else {
        return new Handlebars.SafeString("<strong>" + this.body + "</string>")
    }
  })
  */

  $('#btn').click(function() {
  recipeName = document.getElementById("recipeName").value;
  description = document.getElementById("description").value;
  ingredient = document.getElementById("ingredient").value;
  
  console.log("recipeName:  " + recipeName);
  console.log("description: " + description);
  console.log("ingedient: " + ingredient);
  document.getElementById("recipeName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("ingredient").value = "";
  
  //Hide the form now:
  var inputForm = document.getElementById("inputForm");
  inputForm.style.visibility = "hidden";
  inputForm.style.height = 0;

  //Now put up the recipe name and description and
  //input box for gathering ingredients

  var myMain = document.getElementById("main");
  var recipeDiv = document.createElement('div');
  recipeDiv.setAttribute('id', 'recipe');
  

  var headingDiv = document.createElement('div');
  headingDiv.setAttribute('id', 'heading');
  headingDiv.innerHTML = "<p>Recipe Name: " + recipeName + "</p><p>Description:  " + description + "</p>";
  
  var ingredientsDiv = document.createElement('div');
  ingredientsDiv.setAttribute('id', 'ingredients');
  ingredientsDiv.innerHTML = "<p>Ingredient 1: " + ingredient + "</p>";

  myMain.appendChild(recipeDiv);
  recipeDiv.appendChild(headingDiv);
  recipeDiv.appendChild(ingredientsDiv);


  var more = true;
  while (more) {
    getNextIngredient();
    more = resetDisplay();
  }

});
}

function enterMoreIngredients() {
  alert("Inside enter more Ingredients");
}
function getNextIngredient(){
  var myIngrDiv = document.getElementById("ingredients");
  myIngrDiv.innerHTML += "<form onsubmit=\"enterMoreIngredients()\"><br>Add more ingredients?<br><input type=\"radio\" name=\"yes\" value=\"Yes\"> Yes<br><input type=\"radio\" name=\"no\" value=\"No\"> No<br><input type=\"submit\" value=\"Submit\"></form> ";
  
}

function resetDisplay() {
  alert("Inside resetDisplay()");
  return false;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function getRecipe() {
  

  
}