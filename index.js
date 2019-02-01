//NOTE:
//I bailed on the last part of this lab:
//	1. Refactor your forms so that recipe-form and the edit form template are both constructed with the same recipe-form-template. The template should render with the recipe data for edit, and with empty values for a new recipe. Hint: Don't forget you can pass any object with any properties as the context for your templates, including, for instance, values for onsubmit.

function init() {
  //put any page initialization/handlebars
  //initialization here

  // Finish writing this partial 
  // This is for the description and ingredients of the recipe
  // It will use the recipe-details-partial template with
  // the each helper to display the collection of ingredients

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  //This will display each ingredient within the each block
  Handlebars.registerHelper('displayIngredient', function() {
 
      //Each member of the recipe structure 
      //is coming in as "this"
      
      //console.log("DisplayIngredient:  " + this);
      if (this) {
        return new Handlebars.SafeString(this);
      } 
    }
  ) 
}


document.onload = function() {
 
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function returnRecipeStruct() {
  var name = document.getElementById("recipeName").value;
  var description = document.getElementById("description").value;

  var tmpIngredients = document.getElementsByClassName("ingredient");
  var ingredients = [];
  for (let i=0; i < tmpIngredients.length; i++) {
    if (tmpIngredients[i].value != "") {
      ingredients.push(tmpIngredients[i].value);
    }
  }

  var recipe = {
    name : name,
    description : description,
    ingredient_count : ingredients.length,
    ingredients : ingredients
  }
    console.log("Creating recipe struct.");
    console.log("recipe.name: " + recipe.name);
    console.log("recipe.description: " + recipe.description);
    console.log("recipe.ingredient_count: " + recipe.ingredient_count);
    console.log("recipe.ingredients: " + recipe.ingredients);
  return recipe
}

function loadRecipeForm(){
  var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML);

  //now run the template - this template takes no input.
  var html = template();

  document.getElementsByTagName("main")[0].innerHTML = html; 
}

function createRecipe() {
   //render recipe-template here, 
  //which also calls the partial 

  //create the structure
  var recipe = returnRecipeStruct();
 
  //get element by ID for the recipe template
  //this is the one we use to load the recipe struct
  //into

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  //now run the template on our recipe
  var html = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += html;
  
  resetForm(recipe); 
}

function resetForm(recipe) {
  console.log(recipe.ingredients);
  //now set the recipe values back into the form
  document.getElementById("recipeName").value = recipe.name;
  document.getElementById("description").value= recipe.description;
  var ingredient;
  var ingredients = document.getElementsByClassName("ingredient");
  console.log("Inside resetForm");
  console.log("Ingredients length:  " + ingredients.length);
  for (let i=0; i<recipe.ingredients.length; i++){
    document.getElementsByClassName("ingredient")[i].value = recipe.ingredients[i];
  }
}
//On click of EditRecipe link, this function is called
  // it renders a template called recipe-form-template
  // and allows the recipe to be edited using this form
  // calling updateRecipe() function on form submit
  function editRecipe() {
    displayEditForm();
  }
  
  function displayEditForm() {
    //render a template called recipe-form-template
    // allows recipe to be edited using this form
    // calls updateRecipe(recipe)
    var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    var recipe = returnRecipeStruct();
    console.log("Recipe struct is now: ");
    console.log("recipe.name: " + recipe.name);
    console.log("recipe.description: " + recipe.description);
    console.log("recipe.ingredients: " + recipe.ingredients);
    var html = template(recipe);
    updateRecipe(recipe);
  }

  function updateRecipe(recipe) {
    //re-renders the recipe template with the updated
    //information from displayEditForm()

  //get element by ID for the recipe template
  //this is the one we use to load the recipe struct
  //into
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  
  //now run the template on our recipe
  var html = template(recipe);

  document.getElementsByTagName("main")[0].innerHTML = html;
  }

  function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (localStorage.getItem(v) === null) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}