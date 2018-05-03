function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function(){
    return document.getElementsByName('ingredients').innerHTML

  })

  Handlebars.registerPartial('recipeDetailsPartial',
  document.getElementById('recipe-details-partial').innerHTML)

}

function renderMain(){
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({name: document.getElementById('name').innerHTML});

  document.getElementsByTagName('main').innerHTML+=html
}

function createRecipe(){

  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var html = template({name: document.getElementById('name'),
  description: document.getElementById('description'),
  ingredients: document.getElementsByName('ingredients')})

  document.getElementsByTagName("main")[0].innerHTML += html

}

function displayEditForm(){

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
