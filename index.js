function init() {
  //put any page initialization/handlebars initialization here
  document.getElementsByTagName('main').innerHTML +=
  Handlebars.registerPartial('recipeDetailsPartial', document.querySelector('#recipe-details-partial').innerHTML)
  Handlebars.registerHelper('ingredients', function() {
    return new Handlebars.SafeString("<p>" + this + "</p>")
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {};
  recipe.name = document.getElementsByName('recipe-form-name').value;
  recipe.decription = document.getElementsByName('recipe-form-description').value;
  recipe.ingredients = [];
  document.querySelectorAll('#ingredients input').forEach((ingredient) => {
    recipe.ingredients.push(ingredient.value);
  });
}


function displayEditForm() {



}
