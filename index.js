function intForm(){
  var formTemplate =  document.getElementById('recipe-form-template').innerHTML;
  var result = Handlebars.compile(formTemplate) 
  document.getElementById('main').innerHTML += result({submitAction: 'createRecipe()'});
};

function createRecipe(){
  var values = getRecipeVals();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;     
  var recipeFun = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML += recipeFun(values);
};

function displayEditForm(){
  var ingredientsValues = Array.from(document.getElementsByName('ingredientsList')).map(li=> li.innerHTML);

  var recipe  = {
      name: document.getElementById('recipeName').innerHTML,
      description: document.getElementById('recipeDescription').innerHTML,
      ingredients: ingredientsValues,
      submitAction: 'updateRecipe()'
      };
  var formTemplate = document.getElementById('recipe-form-template').innerHTML;
  var formFun = Handlebars.compile(formTemplate); 
  document.getElementById('main').innerHTML = formFun(recipe);
};

function updateRecipe(){
  var recipe = getRecipeVals();
  var recipeTemplate = document.getElementById('recipe-template').innerHTML;
  var recipeFun = Handlebars.compile(recipeTemplate);
  document.getElementById('main').innerHTML += recipeFun(recipe);
};

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName('ingredients');
  var ingredients = []
  for(let i =0, l = ingredientsNodes.length; i < l; i++){
      if(ingredientsNodes[i].value !== "") {
         ingredients.push(ingredientsNodes[i].value);
      }
  };
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var recipe = {name, description, ingredients};
  return(recipe)
}

function handlebarsSetup(){
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);  
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });
  
};

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
  intForm();
};

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})